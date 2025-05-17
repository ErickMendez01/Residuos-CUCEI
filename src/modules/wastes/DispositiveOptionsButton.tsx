"use client";

import { ReactNode, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { EditUserInformationDialog } from "./EditDispositiveInformationDialog";
import { DeleteUserDialog } from "./DeleteDispositiveDialog";
import { UserInformationDialog } from "./DispositiveInformationDialog";

const UsersMoreOptionsButton = ({
  children,
  user,
  userId,
}: {
  user: any;
  userId: number;
  children: ReactNode;
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  return (
    <div>
      <EditUserInformationDialog
        id={userId}
        user={user}
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
      /> 
      <DeleteUserDialog
        user={user}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      /> 

      <UserInformationDialog
        user={user}
        isOpen={isViewOpen}
        setIsOpen={setIsViewOpen}
      />

      {/* Menú desplegable */}
      <Dropdown>
        <DropdownTrigger>
          {typeof children === "string" ? <span>{children}</span> : children}
        </DropdownTrigger>
        <DropdownMenu aria-label="Acciones del usuario">
          <DropdownItem
            key="edit"
            startContent={<FaEdit className="text-primary" />}
            onClick={() => setIsEditOpen(true)}
          >
            Editar
          </DropdownItem>
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

export default UsersMoreOptionsButton;
