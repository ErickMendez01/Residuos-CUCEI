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
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DispositiveMoreOptionsButton;
