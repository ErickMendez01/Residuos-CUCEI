"use client"
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function DeleteUserInformation({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (error) {
      setError(null);
    }

    try {
      const response = await fetch("/api/users/deleteAdminUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (!response.ok) {
        toast.error("Error al eliminar usuario");
        return;
      }
      toast.success("Usuario eliminado exitosamente");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto w-full">
      <form className="grid max-w-full gap-8" onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-black text-white dark:bg-white dark:text-black font-bold border-black"
          variant="flat"
            disabled={loading}
          >
            Eliminar
          </Button>
        </div>{" "}
      </form>
    </div>
  );
}
