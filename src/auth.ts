// src/lib/auth.ts
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const authHandler = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  ...authConfig,
});

// Solo importa esto desde el middleware o desde componentes cliente
export const auth = authHandler.auth;
export const signIn = authHandler.signIn;
export const signOut = authHandler.signOut;
