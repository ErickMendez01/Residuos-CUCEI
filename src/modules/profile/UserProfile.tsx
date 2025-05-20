"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { Input, Card, CardBody } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

type UserData = {
  name?: string;
  email?: string;
  gender?: string;
  country?: string;
  city?: string;
  university?: string;
  career?: string;
  image?: string;
};

export default function UserProfile({ id }: { id: number }) {
  const [user, setUser] = useState<UserData>();
  const [formData, setFormData] = useState<UserData>({
    name: user?.name,
    email: user?.email,
    gender: user?.gender,
    country: user?.country,
    city: user?.city,
    university: user?.university,
    career: user?.career,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/profile?id=${id}`);
        const data = await res.json();
        setUser(data.user as UserData);
        setFormData({
          name: data.user.name ?? "",
          email: data.user.email ?? "",
          gender: data.user.gender ?? "",
          country: data.user.country ?? "",
          city: data.user.city ?? "",
          university: data.user.university ?? "",
          career: data.user.career ?? "",
        });
      } catch (error) {
        toast.error("Error al cargar datos del usuario");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/profile/editUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formData }),
      });

      if (res.ok) {
        toast.success("Perfil actualizado correctamente");
      } else {
        toast.error("Error al actualizar perfil");
      }
    } catch (error) {
      toast.error("Error en la solicitud");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-8 text-gray-600">Cargando perfil...</div>
    );
  }

  return (
    <Card shadow="md" className="max-w-5xl mx-auto mt-10 p-6">
      <CardBody className="p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex flex-col items-center w-full md:w-1/3 text-center md:text-left">
          <Avatar
            isBordered
            src={user?.image || "/images/user.png"}
            alt="Foto de perfil"
            className="w-60 h-60 rounded-full object-cover"
          />
          <h2 className="text-2xl font-semibold mt-4 text-black dark:text-white">
            {user?.name || "Usuario"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-zinc-900 dark:text-white p-6 rounded-xl border dark:border-zinc-700 shadow-lg"
        >
          <div className="px-2 py-2">
            <Input
              name="name"
              label="Nombre"
              value={formData.name ?? ""}
              onChange={handleChange}
              isRequired
            />
          </div>
          <div className="px-2 py-2">
            <Input
              name="email"
              label="Correo electrónico"
              value={formData.email ?? ""}
              onChange={handleChange}
              isRequired
            />
          </div>
          <div className="px-2 py-2">
            <Input
              name="gender"
              label="Género"
              value={formData.gender ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="px-2 py-2">
            <Input
              name="country"
              label="País"
              value={formData.country ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="px-2 py-2">
            <Input
              name="city"
              label="Ciudad"
              value={formData.city ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className=" px-2 py-2">
            <Input
              name="university"
              label="Universidad"
              value={formData.university ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="px-2 py-2">
            <Input
              name="career"
              label="Carrera"
              value={formData.career ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="px-2 col-span-1 py-2 md:col-span-2 flex justify-center mt-2">
            <Button
              type="submit"
              className=" w-full px-2 bg-black text-white dark:bg-white dark:text-black font-semibold py-2 border border-black hover:opacity-90 transition"
            >
              Guardar cambios
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
