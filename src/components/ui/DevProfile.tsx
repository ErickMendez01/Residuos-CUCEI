"use client";

import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

type DevProfileProps = {
  title: string;
  content: React.ReactNode; // Permite cualquier contenido React en el cuerpo
  image?: string; // Foto de perfil del desarrollador
};

export default function DevProfile({ title, content, image }: DevProfileProps) {
  return (
    <Card
      isBlurred
      className="border-none bg-background/70 dark:bg-default-100/50 max-w-[100%]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-3">
            <h4 className="font-extrabold text-foreground/80">{title}</h4>
            {content}
          </div>

          <div className="relative col-span-6 md:col-span-3">
            {image && <img src={image} className="w-100%" />}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
