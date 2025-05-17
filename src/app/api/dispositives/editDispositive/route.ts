import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Extendemos el esquema para incluir todos los campos opcionales
const routeContextSchema = z.object({
  id: z.number(),
  password: z.string().optional(),
  name: z.string().optional(),
  gender: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  university: z.string().optional(),
  career: z.string().optional(),
  email: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = routeContextSchema.parse(json);

    const user = await prisma.user.findFirst({
      where: { id: body.id },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "USER_NOT_FOUND", update: false }),
        { status: 404 }
      );
    }

    const userUpdateData: Partial<typeof user> = {};

    if (body.password) userUpdateData.password = body.password;
    if (body.name) userUpdateData.name = body.name;
    if (body.gender) userUpdateData.gender = body.gender;
    if (body.country) userUpdateData.country = body.country;
    if (body.city) userUpdateData.city = body.city;
    if (body.university) userUpdateData.university = body.university;
    if (body.career) userUpdateData.career = body.career;
    if (body.email) userUpdateData.email = body.email;

    if (Object.keys(userUpdateData).length === 0) {
      return new Response(
        JSON.stringify({ message: "NO_FIELDS_TO_UPDATE", update: false }),
        { status: 200 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: userUpdateData,
    });

    return new Response(
      JSON.stringify({ user: updatedUser, update: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({
        message: "INTERNAL_SERVER_ERROR",
        error: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}
