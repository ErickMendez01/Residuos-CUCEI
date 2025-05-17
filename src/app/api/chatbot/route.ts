import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question } = await req.json();

  const systemPrompt = `Eres un experto en sustentabilidad. Responde de forma clara y útil preguntas sobre reciclaje, energías renovables, impacto ambiental, cambio climático, consumo responsable y residuos electrónicos.`;

  try {
    const response = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r", // Modelo de Cohere (gratis)
        message: question,
        connectors: [],
        chat_history: [
          { user_name: "user", text: question },
        ],
        preamble: systemPrompt,
      }),
    });

    const data = await response.json();

    const answer =
      data.text ?? "No pude generar una respuesta en este momento.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error al comunicarse con Cohere:", error);
    return NextResponse.json(
      { answer: "Ocurrió un error al generar la respuesta." },
      { status: 500 }
    );
  }
}
