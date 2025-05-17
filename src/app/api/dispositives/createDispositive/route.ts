import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { EstadoGeneral } from "@/generated/prisma";
import {auth}  from "@/auth"
const routeContextSchema = z.object({
  nombre: z.string(),
  marca: z.string(),
  modelo: z.string(),
  estado_general: z.string(),
  descripcion: z.string().optional(),
  categoria: z.string().optional(),
  numero: z.string().optional(),
  ubicacion: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await auth();
   const json = await req.json()
   const body = routeContextSchema.parse(json)
  try {
    const data: any = {
      nombre: body.nombre,
      marca: body.marca,
      modelo: body.modelo,
      estado_general: body.estado_general as EstadoGeneral,
      descripcion: body.descripcion || null,
      categoria: body.categoria || null,
      numero: body.numero || null,
      ubicacion: body.ubicacion || null,
      resultado : "PENDIENTE",
      justificacion: "",
    };

    if (session?.user?.id) {
      data.id_usuario = Number(session.user.id);
    }

    const newDispositive = await prisma.dispositivo.create({
      data,
    });

    return new Response(
      JSON.stringify({ dispositive: newDispositive, created: true }),
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
