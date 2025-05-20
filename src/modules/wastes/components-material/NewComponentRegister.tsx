"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { toast } from "react-toastify";

const ESTADOS_GENERALES = ["FUNCIONAL", "PARCIALMENTE_FUNCIONAL", "DAÑADO"];

export function NewComponentRegister({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
}) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [estadoGeneral, setEstadoGeneral] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [tipo_componente, setTipo] = useState("");
  const [numero, setNumero] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!marca || !modelo || !estadoGeneral) {
      setError("Por favor, complete todos los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const requestBody = {
        marca,
        modelo,
        estado_general: estadoGeneral,
        observaciones,
        tipo_componente,
        numero,
        ubicacion,
      };

      const response = await fetch("/api/components-material/createComponent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        toast.error("Error creando componente");
        return;
      }

      toast.success("Componente creado exitosamente");

      // Reset form

      setMarca("");
      setModelo("");
      setEstadoGeneral("");
      setObservaciones("");
      setTipo("");
      setNumero("");
      setUbicacion("");
      setIsOpen(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="center"
      scrollBehavior="normal"
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Nuevo Componente
            </ModalHeader>
            <ModalBody className="grid gap-4">
              <Input
                label="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              />
              <Input
                label="Modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required
              />
              <Select
                label="Estado general"
                selectedKeys={[estadoGeneral]}
                onChange={(e) => setEstadoGeneral(e.target.value)}
                required
              >
                {ESTADOS_GENERALES.map((estado) => (
                  <SelectItem key={estado} value={estado}>
                    {estado}
                  </SelectItem>
                ))}
              </Select>
              <Input
                label="Observaciones"
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
              />
              <Input
                label="Tipo Componente"
                value={tipo_componente}
                onChange={(e) => setTipo(e.target.value)}
              />
              <Input
                label="Número de serie"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              <Input
                label="Ubicación"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-black text-white dark:bg-white dark:text-black font-bold border-black"
                type="button"
                variant="faded"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                className="bg-black text-white dark:bg-white dark:text-black font-bold border-black"
                variant="flat"
                type="submit"
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar Componente"}
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
