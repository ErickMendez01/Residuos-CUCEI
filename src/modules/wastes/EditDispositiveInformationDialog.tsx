"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import UserInformationContent from "./DispositiveInformationContent";
import { User } from "@/generated/prisma/client";

type Userobject = User;

export function EditUserInformationDialog({
  isOpen,
  setIsOpen,
  id,
  user,
}: {
  isOpen: boolean;
  id: number;
  user: Userobject;
  setIsOpen: (newValue: boolean) => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      size="xl"
      scrollBehavior="inside"
      radius="lg"
      backdrop="opaque"
      className="p-4"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Actualizar usuario
            </ModalHeader>
            <ModalBody>
              <p className="text-sm text-default-500 mb-2">
                Agrega la nueva información del usuario para los campos que desea actualizar.
              </p>
              <div className="grid max-h-[70vh] gap-4 overflow-auto py-4">
                <UserInformationContent user={user} id={id} />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
