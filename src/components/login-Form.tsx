"use client"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { Input } from "@nextui-org/react"
import { loginSchema, LoginSchema } from "@/lib/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"

interface LoginFormProps {
  isOpen: boolean
  onClose: () => void
}

const onSubmit = (data: LoginSchema) => {
  console.log(data)
}

const LoginForm = ({ isOpen, onClose }: LoginFormProps) => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
    >
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
              Iniciar sesión
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  )
}

export default LoginForm
