"use server";

import { User } from "@/generated/prisma/client";
import { LoginSchema } from "@/lib/login-schema";
import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/register-schema";
import { ActionResult } from "@/types";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export async function signInUser(
  data: LoginSchema
): Promise<ActionResult<string>> {
  try {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(result);
    return { status: "success", data: "Login successful" };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { status: "error", error: "Invalid credentials" };
        default:
          return { status: "error", error: "An error occurred" };
      }
    } else {
      return { status: "error", error: "An error occurred" };
    }
  }
}


export async function signOutUser(){
  await signOut({redirectTo: '/'});
}

export async function registerUser(
  data: RegisterSchema
): Promise<ActionResult<User>> {
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

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}
