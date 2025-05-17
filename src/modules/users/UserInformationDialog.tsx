"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { User } from "@/generated/prisma/client";
import { Icons } from "@/components/icons";
import { UserInformationSection } from "@/modules/_components/Dataschema";
import { UserInformationItems } from "@/modules/_components/Informationschema";


type UserObject = User;

export function UserInformationDialog({
  isOpen,
  setIsOpen,
  user,
}: {
  user: UserObject;
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
                  {""}Datos de usuario: {""} {user.name}
              </div>
            </ModalHeader>
            <ModalBody>
              <Card shadow="md" radius="lg" className="w-full ">
                <CardBody className="grid gap-6">
                  {user && (
                    <UserInformationSection title="Información de cuenta">
                      <UserInformationItems
                        icon={
                          <Icons.user className="text-default-500 size-4" />
                        }
                        label="Nombre"
                        value={user.name}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.envelope className="text-default-500 size-4" />
                        }
                        label="Correo Electronico"
                        value={user.email}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.venusMars className="text-default-500 size-4" />
                        }
                        label="Genero"
                        value={user.gender}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.globe className="text-default-500 size-4" />
                        }
                        label="Pais"
                        value={user.country}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.city className="text-default-500 size-4" />
                        }
                        label="Ciudad"
                        value={user.city}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.university className="text-default-500 size-4" />
                        }
                        label="Universidad"
                        value={user.university}
                      />
                      <UserInformationItems
                        icon={
                          <Icons.Fabriefcase className="text-default-500 size-4" />
                        }
                        label="Profesión"
                        value={user.career}
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
