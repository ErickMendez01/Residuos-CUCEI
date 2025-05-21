import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { publicRoutes, privateRoutes } from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const isLoggedIn = !!req.auth;

  const isPublic = publicRoutes.some((route) => path === route);
  const isPrivate = privateRoutes.some((route) => path.startsWith(route));

  // Permitir siempre rutas públicas
  if (isPublic) return NextResponse.next();

  // Redirigir a / si intenta entrar a privadas sin login
  if (isPrivate && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Si está logueado y entra a la raíz "/", redirigir a /residuos
  if (path === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL("/residuos", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/",               // Redirigir root
    "/residuos/:path*",
    "/chatbot/:path*",
    "/usuarios/:path*",
    "/perfil/:path*",
  ],
};
