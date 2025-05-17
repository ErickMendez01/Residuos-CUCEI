import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question } = await req.json();

  const systemPrompt = `Eres un asistente experto en sustentabilidad. 
Responde preguntas de manera clara y útil sobre temas como reciclaje, energías renovables, impacto ambiental, cambio climático, consumo responsable y cuidado del agua. 
Sé breve pero informativo.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    const answer = data.choices?.[0]?.message?.content ?? "No pude generar una respuesta en este momento.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error al comunicarse con OpenAI:", error);
    return NextResponse.json({ answer: "Ocurrió un error al generar la respuesta." }, { status: 500 });
  }
}
