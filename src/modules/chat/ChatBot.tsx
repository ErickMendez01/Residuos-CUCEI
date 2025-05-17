"use client";

import { useState } from "react";

export default function ChatBotContent() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      if (!res.ok) throw new Error("Error al obtener respuesta del chatbot");

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "bot", content: data.answer }]);
      setInput("");
    } catch (err) {
      setError("Error al conectar con el chatbot. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Chat sobre Sustentabilidad 🌱</h1>
      <div className="border p-4 rounded-lg h-96 overflow-y-auto mb-4 bg-white dark:bg-zinc-900">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.role === "user" ? "bg-blue-200 dark:bg-blue-600" : "bg-green-200 dark:bg-green-600"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="flex gap-2">
        <input
          className="flex-grow border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Pregúntame sobre sustentabilidad..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-80 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
