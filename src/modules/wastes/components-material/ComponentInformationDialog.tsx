"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Componente } from "@/generated/prisma/client";
import { Icons } from "@/components/icons";
import { UserInformationSection } from "@/modules/_components/Dataschema";
import { UserInformationItems } from "@/modules/_components/Informationschema";

type CompleteComponent = Componente;

export function ComponentInformationDialog({
  isOpen,
  setIsOpen,
  component,
}: {
  component: CompleteComponent;
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
                  {""}Datos de componente
              </div>
            </ModalHeader>
            <ModalBody>
              <Card shadow="md" radius="lg" className="w-full ">
                <CardBody className="grid gap-6 space-x-2 px-2">
                  {component && (
                    <UserInformationSection title="Información de componente">
                      <UserInformationItems
                        icon={
                          <Icons.faTag className="text-default-500 size-4" />
                        }
                        label="Marca"
                        value={component.marca}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdDevices className="text-default-500 size-4" />
                        }
                        label="Modelo"
                        value={component.modelo}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.biBarcode className="text-default-500 size-4" />
                        }
                        label="Numero Serie"
                        value={component.numero}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faRegDotCircle className="text-default-500 size-4" />
                        }
                        label="Estado"
                        value={component.estado_general}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdCategory className="text-default-500 size-4" />
                        }
                        label="Tipo Componente"
                        value={component.tipo_componente}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faMapMarkerAlt className="text-default-500 size-4" />
                        }
                        label="Entrega Estatus"
                        value={component.ubicacion}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdCheckCircle className="text-default-500 size-4" />
                        }
                        label="Resultado"
                        value={component.resultado}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.faFileAlt className="text-default-500 size-4" />
                        }
                        label="Resultado justificación"
                        value={component.justificacion}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.mdNotes className="text-default-500 size-4" />
                        }
                        label="Observaciones"
                        value={component.observaciones}
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
