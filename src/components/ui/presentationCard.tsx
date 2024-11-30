"use client";

import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function App() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/70 dark:bg-default-100/50 max-w-[100%]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-3">
            <Image
              alt="Imagen de presentación"
              className="object-cover"
              shadow="md"
              src="https://nextui.org/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="relative col-span-6 md:col-span-3">
            <h3 className="font-extrabold text-foreground/80">Conócenos</h3>
            <p className=" text-foreground/80">
              Buscamos agilizar el desarrollo de proyectos grandes con el
              objetivo de que se concreten más rápida y ágilmente.
            </p>
            <br />
            <p className=" text-foreground/80">
              Esperamos representar un factor crucial en la adminstración de
              proyectos.
            </p>
            <br />
            <p className=" text-foreground/80">
              Check Task surgió como una forma de administrar nuestros propios
              proyectos universitarios, los cuales requerían de un control
              detallado de cada tarea.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
