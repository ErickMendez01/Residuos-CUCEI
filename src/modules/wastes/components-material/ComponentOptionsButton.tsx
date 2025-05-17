"use client";

import { ReactNode, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaTrash, FaEye } from "react-icons/fa";
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
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ComponentMoreOptionsButton;
