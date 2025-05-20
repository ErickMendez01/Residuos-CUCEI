import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ResultadoClasificacion } from "@/generated/prisma/client";

export async function POST(req: Request) {
  const { component } = await req.json();

  const systemPrompt = `Eres un experto en clasificación de componentes electrónicos. Dado un objeto con información de un componente, responde únicamente con uno de los siguientes valores en mayúsculas: REUTILIZAR, RECICLAR, DESECHABLE o PENDIENTE. No incluyas explicaciones, solo responde con la categoría.`;

  try {
    const response = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r",
        message: `Clasifica el siguiente componente: ${JSON.stringify(component)}`,
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

    const updated = await prisma.componente.update({
      where: {
        id_componente: component.id,
      },
      data: {
        resultado: rawResult as ResultadoClasificacion,
      },
    });

    return NextResponse.json({
      message: "Clasificación completada",
      resultado: rawResult,
      componente: updated,
    });
  } catch (error) {
    console.error("Error en clasificación:", error);
    return NextResponse.json(
      { message: "Error al clasificar el componente." },
      { status: 500 }
    );
  }
}
