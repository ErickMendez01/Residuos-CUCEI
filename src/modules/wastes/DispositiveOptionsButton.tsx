"use client";

import { ReactNode, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaTrash, FaEye } from "react-icons/fa";
import { DeleteDispositiveDialog } from "./DeleteDispositiveDialog";
import { DispositiveInformationDialog } from "./DispositiveInformationDialog";
import { toast } from "react-toastify";

const DispositiveMoreOptionsButton = ({
  children,
  dispositive,
  dispositiveId,
}: {
  dispositive: any;
  dispositiveId: number;
  children: ReactNode;
}) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const handleClasify = async () => {
    try {
      const res = await fetch("/api/chatbot/clasificar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dispositive, dispositiveId}),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al clasificar");

      toast.success("Clasificación realizada con éxito");
      console.log("Resultado:", data); //
    } catch (err) {
      console.error("Error al clasificar:", err);
      toast.error("Ocurrió un error al clasificar el dispositivo.");
    }
  };

  return (
    <div>
      <DeleteDispositiveDialog
        dispositive={dispositive}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      />
      <DispositiveInformationDialog
        dispositive={dispositive}
        isOpen={isViewOpen}
        setIsOpen={setIsViewOpen}
      />
      <Dropdown>
        <DropdownTrigger>
          {typeof children === "string" ? <span>{children}</span> : children}
        </DropdownTrigger>
        <DropdownMenu aria-label="Acciones">
          <DropdownItem
            key="view"
            startContent={<FaEye className="text-secondary" />}
            onClick={() => setIsViewOpen(true)}
          >
            Detalles
          </DropdownItem>
          <DropdownItem
            key="delete"
            startContent={<FaTrash className="text-danger" />}
            className="text-danger"
            onClick={() => setIsDeleteOpen(true)}
          >
            Eliminar
          </DropdownItem>

          {/* Nueva opción: Clasificar */}
          <DropdownItem
            key="clasify"
            startContent={<span className="text-primary">🔍</span>}
            onClick={handleClasify}
          >
            Clasificar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DispositiveMoreOptionsButton;
