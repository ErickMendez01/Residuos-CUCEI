import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { EstadoGeneral } from "@/generated/prisma";
import {auth}  from "@/auth"
const routeContextSchema = z.object({
  marca: z.string(),
  modelo: z.string(),
  estado_general: z.string(),
  observaciones: z.string().optional(),
  tipo_componente: z.string().optional(),
  numero: z.string().optional(),
  ubicacion: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await auth();
   const json = await req.json()
   const body = routeContextSchema.parse(json)
  try {
    const data: any = {
      marca: body.marca,
      modelo: body.modelo,
      estado_general: body.estado_general as EstadoGeneral,
      observaciones: body.observaciones || null,
      tipo_componente: body.tipo_componente || null,
      numero: body.numero || null,
      ubicacion: body.ubicacion || null,
      resultado : "PENDIENTE",
      justificacion: "",
    };

    if (session?.user?.id) {
      data.id_usuario = Number(session.user.id);
    }

    const newComponent = await prisma.componente.create({
      data,
    });

    return new Response(
      JSON.stringify({ component: newComponent, created: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "INTERNAL_ERROR" }),
      { status: 500 }
    );
  }
}
