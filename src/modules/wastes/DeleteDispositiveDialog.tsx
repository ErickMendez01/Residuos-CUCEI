"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import DeleteUserInformation from "./DeleteDispositiveInformation";
import { User } from "@/generated/prisma/client";

type Userobject = User;

export function DeleteUserDialog({
  isOpen,
  setIsOpen,
  user,
}: {
  isOpen: boolean;
  user: Userobject;
  setIsOpen: (newValue: boolean) => void;
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="lg" backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Eliminar usuario
            </ModalHeader>
            <ModalBody>
              <p className="text-sm text-default-500">
                ¿Está seguro que desea eliminar al siguiente usuario?
                <br />
                La información de la cuenta se eliminará definitivamente y el
                usuario perderá acceso a la plataforma.
              </p>
            </ModalBody>
            <ModalFooter>
              <DeleteUserInformation id={user.id.toString()} />
              <Button
                className="bg-white text-black dark:bg-black dark:text-white dark:border-white font-bold border-black"
                variant="faded"
                onPress={onClose}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
