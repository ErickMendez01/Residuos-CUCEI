"use client";
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
import { registerUser } from "@/actions/authActions";
import { toast } from 'react-toastify'
interface RegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterForm = ({ isOpen, onClose }: RegisterFormProps) => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);
    if (result.status === "success") {
      toast.success("Usuario registrado");
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path.join(".") as "email" | "password" | "name";
          setError(fieldName, { message: e.message });
        });
      } else {
        setError("root.serverError", { message: result.error });
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent>
        <>
          <ModalHeader>Regístrate</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 px-2">
                <Input
                  label="Nombre"
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
                {errors.root?.serverError && (
                  <p className="text-danger text-sm">{errors.root.serverError.message}</p>
                )}
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  fullWidth
                  isDisabled={!isValid}
                  className="bg-black w-full text-white  dark:bg-white dark:text-black px-4 py-2 rounded-lg font-bold"
                >
                  Registrarse
                </Button>
              </div>
            </form>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default RegisterForm;
