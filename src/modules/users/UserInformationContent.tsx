"use client";
import { SyntheticEvent, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { User } from "@/generated/prisma/client";

type Userobject = User;

export default function UserInformationContent({
  user,
  id,
}: {
  user: Userobject;
  id: number;
}) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState(user.name ?? "");
  const [gender, setGender] = useState(user.gender ?? "");
  const [country, setCountry] = useState(user.country ?? "");
  const [city, setCity] = useState(user.city ?? "");
  const [university, setUniversity] = useState(user.university ?? "");
  const [career, setCareer] = useState(user.career ?? "");
  const [email, setEmail] = useState(user.email ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (error) setError(null);

    const updatedFields: Record<string, any> = { id };

    const updateIfChanged = (
      fieldName: string,
      value: string,
      userValue: string | undefined | null
    ) => {
      if (value && value !== userValue) {
        updatedFields[fieldName] = value;
      }
    };

    updateIfChanged("name", name, user.name);
    updateIfChanged("gender", gender, user.gender);
    updateIfChanged("country", country, user.country);
    updateIfChanged("city", city, user.city);
    updateIfChanged("university", university, user.university);
    updateIfChanged("career", career, user.career);
    updateIfChanged("email", email, user.email);

    if (password) updatedFields.password = password;

    if (Object.keys(updatedFields).length === 1) {
      setError("No hay cambios para actualizar.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/users/editAdminUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        toast.error("Error actualizando datos de usuario");
        setLoading(false);
        return;
      }

      toast.success("Usuario actualizado exitosamente");
      setPassword("");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-start gap-1">
          <h4 className="text-lg font-semibold">Datos del Usuario</h4>
          <p className="text-sm text-default-500">
            Por favor proporcione los datos que desea actualizar.
          </p>
        </CardHeader>

        <CardBody className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="py-2">
              <Input
                label="Nombre(s)"
                placeholder="Ingrese su nombre"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="py-2">
              <Input
                label="Contraseña"
                placeholder="Ingrese la contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                type="password"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-2">
              <Input
                label="Correo Electrónico"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div className="py-2">
              <Input
                label="Género"
                placeholder="Ingrese genero"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-6">
              <Input
                label="País"
                value={country}
                placeholder="Ingrese su pais"
                onChange={(e) => setCountry(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-6">
              <Input
                label="Ciudad"
                value={city}
                placeholder="Ingrese su ciudad"
                onChange={(e) => setCity(e.target.value)}
                type="text"
              />
            </div>
            <div className="py-6">
              <Input
                label="Universidad"
                value={university}
                placeholder="Ingrese su universidad"
                onChange={(e) => setUniversity(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="py-6">
              <Input
                label="Carrera"
                value={career}
                placeholder="Ingrese su carrera"
                onChange={(e) => setCareer(e.target.value)}
                type="text"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
        </CardBody>

        <CardFooter className="flex justify-end">
          <Button type="submit"  className="bg-black text-white dark:bg-white dark:text-black font-bold border-black" disabled={loading}>
            {loading ? "Guardando..." : "Guardar cambios"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
