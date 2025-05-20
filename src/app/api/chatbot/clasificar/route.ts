import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ResultadoClasificacion } from "@/generated/prisma/client";
import { z } from "zod"; // Asegúrate de importar zod si vas a usarlo

// Puedes tipar correctamente el body
const routeContextSchema = z.object({
  dispositive: z.any(),
  dispositiveId: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { dispositive, dispositiveId } = routeContextSchema.parse(body);

    const systemPrompt = `Eres un experto en clasificación de dispositivos electrónicos. Dado un objeto con información de un dispositivo, responde únicamente con uno de los siguientes valores en mayúsculas: REUTILIZAR, RECICLAR, DESECHABLE o PENDIENTE. No incluyas explicaciones, solo responde con la categoría.`;

    const response = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r",
        message: `Clasifica el siguiente dispositivo: ${JSON.stringify(dispositive)}`,
        preamble: systemPrompt,
        connectors: [],
        chat_history: [],
      }),
    });

    const data = await response.json();

    const rawResult = (data.text ?? "").trim().toUpperCase();
    const validResults = ["REUTILIZAR", "RECICLAR", "DESECHABLE", "PENDIENTE"];

    if (!validResults.includes(rawResult)) {
      return NextResponse.json(
        { message: "La respuesta del modelo no es válida.", raw: rawResult },
        { status: 400 }
      );
    }

    const updated = await prisma.dispositivo.update({
      where: {
        id_dispositivo: Number(dispositiveId),
      },
      data: {
        resultado: rawResult as ResultadoClasificacion,
      },
    });

    return NextResponse.json({
      message: "Clasificación completada",
      resultado: rawResult,
      dispositivo: updated,
    });
  } catch (error) {
    console.error("Error en clasificación:", error);
    return NextResponse.json(
      { message: "Error al clasificar el dispositivo." },
      { status: 500 }
    );
  }
}
