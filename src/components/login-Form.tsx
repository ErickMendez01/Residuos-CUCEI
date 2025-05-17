"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@/components/ui/modal";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { loginSchema, LoginSchema } from "@/lib/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "@/actions/authActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
}



const LoginForm = ({ isOpen, onClose }: LoginFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async  (data: LoginSchema) => {
   const result = await signInUser(data);
   if (result.status === "success") {
      toast.success("Inicio de sesión exitoso")
      router.push("/residuos");
    } else {
      toast.error("Credenciales incorrectas");
    }
};

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent>
        <>
          <ModalHeader>Inicia Sesión</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 px-2">
                <Input
                  label="Correo electrónico"
                  defaultValue=""
                  type="email"
                  variant="bordered"
                  placeholder="Correo electrónico"
                  {...register("email")}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message as string}
                />
                <Input
                  label="Contraseña"
                  variant="bordered"
                  defaultValue=""
                  type="password"
                  placeholder="Contraseña"
                  {...register("password")}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message as string}
                />
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  fullWidth
                  isDisabled={!isValid}
                  className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-bold"
                >
                  Iniciar sesión
                </Button>
              </div>
            </form>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default LoginForm;
