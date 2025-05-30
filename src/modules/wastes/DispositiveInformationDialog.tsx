"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Dispositivo } from "@/generated/prisma/client";
import { Icons } from "@/components/icons";
import { UserInformationSection } from "@/modules/_components/Dataschema";
import { UserInformationItems } from "@/modules/_components/Informationschema";

type CompleteDispositive = Dispositivo;

export function DispositiveInformationDialog({
  isOpen,
  setIsOpen,
  dispositive,
}: {
  dispositive: CompleteDispositive;
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      size="xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex flex-row items-center space-x-6">
                  {""}Datos de dispositivo
              </div>
            </ModalHeader>
            <ModalBody>
              <Card shadow="md" radius="lg" className="w-full ">
                <CardBody className="grid gap-6 space-x-2 px-2">
                  {dispositive && (
                    <UserInformationSection title="Información de dispositivo">
                      <UserInformationItems
                        icon={
                          <Icons.comment className="text-default-500 size-4" />
                        }
                        label="Nombre"
                        value={dispositive.nombre}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faTag className="text-default-500 size-4" />
                        }
                        label="Marca"
                        value={dispositive.marca}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdDevices className="text-default-500 size-4" />
                        }
                        label="Modelo"
                        value={dispositive.modelo}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.biBarcode className="text-default-500 size-4" />
                        }
                        label="Numero Serie"
                        value={dispositive.numero}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faRegDotCircle className="text-default-500 size-4" />
                        }
                        label="Estado"
                        value={dispositive.estado_general}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdCategory className="text-default-500 size-4" />
                        }
                        label="Categoria"
                        value={dispositive.categoria}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faMapMarkerAlt className="text-default-500 size-4" />
                        }
                        label="Entrega Estatus"
                        value={dispositive.ubicacion}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdCheckCircle className="text-default-500 size-4" />
                        }
                        label="Resultado"
                        value={dispositive.resultado}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faFileAlt className="text-default-500 size-4" />
                        }
                        label="Resultado justificación"
                        value={dispositive.justificacion}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdNotes className="text-default-500 size-4" />
                        }
                        label="Descripción"
                        value={dispositive.descripcion}
                      />
                    </UserInformationSection>
                  )}
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter />
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
