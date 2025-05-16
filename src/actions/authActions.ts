"use server";

import { User } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/register-schema";
import { ActionResult } from "@/types";
import bcrypt from "bcryptjs";



export async function registerUser(data: RegisterSchema): Promise<ActionResult<User>> {
  try {
    const validated = await registerSchema.safeParse(data);

    if (!validated.success) {
      return { status: "error", error: validated.error.errors };
    }

    const { email, password, name } = validated.data;

    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return { status: "error", error: "Este correo ya está registrado" };
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return { status: "success", data: user };
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return { status: "error", error: "Something went wrong" };
  }
}
