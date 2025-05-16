import {z} from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1, {message: 'El nombre es obligatorio'}),
  email: z.string().email({message: 'El correo electrónico no es válido'}),
  password: z.string().min(8, {message: 'La contraseña debe tener al menos 8 caracteres'}),
})

export type RegisterSchema = z.infer<typeof registerSchema>