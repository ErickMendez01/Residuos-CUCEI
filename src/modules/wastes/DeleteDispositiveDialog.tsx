"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import DeleteDispositiveInformation from "./DeleteDispositiveInformation";
import { Dispositivo } from "@/generated/prisma/client";

type CompleteDispositive = Dispositivo

export function DeleteDispositiveDialog({
  isOpen,
  setIsOpen,
  dispositive,
}: {
  isOpen: boolean;
  dispositive: CompleteDispositive;
  setIsOpen: (newValue: boolean) => void;
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="lg" backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Eliminar Dispositivo
            </ModalHeader>
            <ModalBody>
              <p className="text-sm text-default-500">
                ¿Está seguro que desea eliminar al siguiente registro?
                <br />
                La información  se eliminará definitivamente de la plataforma.
              </p>
            </ModalBody>
            <ModalFooter>
              <DeleteDispositiveInformation id={dispositive.id_dispositivo.toString()} />
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
