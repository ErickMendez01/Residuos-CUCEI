"use client";

import { ReactNode, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaTrash, FaEye, FaTags } from "react-icons/fa"
import { DeleteComponentDialog } from "./DeleteComponentDialog";
import { ComponentInformationDialog } from "./ComponentInformationDialog";

const ComponentMoreOptionsButton = ({
  children,
  component,
  componentId,
}: {
  component: any;
  componentId: number;
  children: ReactNode;
}) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isClassifying, setIsClassifying] = useState(false);

  const handleClassify = async () => {
    try {
      setIsClassifying(true);
      const res = await fetch("/api/chatbot/clasificar/componente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ component }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Clasificación: ${data.resultado}`);
      } else {
        alert(`Error al clasificar: ${data.message}`);
      }
    } catch (err) {
      alert("Error al clasificar el componente.");
      console.error(err);
    } finally {
      setIsClassifying(false);
    }
  };

  return (
    <div>
      <DeleteComponentDialog
        component={component}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      />
      <ComponentInformationDialog
        component={component}
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
          <DropdownItem
            key="classify"
            startContent={<FaTags className="text-primary" />}
            onClick={handleClassify}
            isDisabled={isClassifying}
          >
            Clasificar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ComponentMoreOptionsButton;
