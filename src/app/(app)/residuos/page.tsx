import { auth } from "@/auth";
import React from "react";

export default async function Residuos() {
  const session = await auth()
  return (
    <div>
        <h1 className="text-2xl font-bold">Residuos</h1>
        <p className="mt-4">
            Aquí puedes gestionar los residuos de tu empresa. Puedes agregar, editar y eliminar residuos.
        </p>
        <div className="mt-4">
            <h2 className="text-xl font-bold">Lista de Residuos</h2>
            {session ? (
                <p className="mt-4">
                    Bienvenido {JSON.stringify(session, null, 2)}, puedes gestionar los residuos de tu empresa.
                </p>
            ) : (
                <p className="mt-4">
                    No tienes sesión iniciada. Por favor inicia sesión para gestionar los residuos de tu empresa.
                </p>
            )}
        </div>
    </div>
  );
}
