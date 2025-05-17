import { z } from "zod";
import { prisma } from "@/lib/prisma";

const routeContextSchema = z.object({
  id: z.number(),
  password: z.string().optional(), // No lo estás usando, pero lo dejamos por si acaso
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

    const user = await prisma.user.findUnique({
      where: { id: body.id },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "USER_NOT_FOUND", update: false }),
        { status: 404 }
      );
    }

    const { id, ...dataToUpdate } = body;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...dataToUpdate,
      },
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
