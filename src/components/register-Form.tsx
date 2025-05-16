"use client"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/lib/register-schema";
interface RegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const onSubmit = (data: RegisterSchema) => {
  console.log(data);
};

const RegisterForm = ({ isOpen, onClose }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent>
        <>
          <ModalHeader>Regístrate</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 px-2">
                <Input
                  label ="Nombre"
                  defaultValue=""
                  variant="bordered"
                  type="text"
                  placeholder="Nombre completo"
                  {...register("name")}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                />
                <Input
                  label="Correo electrónico"
                  defaultValue=""
                  variant="bordered"
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("email")}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />
                <Input
                  label="Contraseña"
                  variant="bordered"
                  defaultValue=""
                  type="password"
                  placeholder="Contraseña"
                  {...register("password")}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              isDisabled={!isValid}
              className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-bold"
              onClick={onClose}
            >
              Registrarse
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default RegisterForm;
