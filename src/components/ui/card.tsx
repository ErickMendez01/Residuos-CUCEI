"use client";

import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";

type CustomCardProps = {
  iconSrc?: string; // Icono
  title: string;
  content: React.ReactNode; // Permite cualquier contenido React en el cuerpo
};

export default function CustomCard({
  iconSrc,
  title,
  content,
}: CustomCardProps) {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="flex items-center gap-4">
        <div className="justify-center">
          {iconSrc && (
            <img
              src={iconSrc}
              className="w-10 h-10" // Estilo para imagen circular
            />
          )}
          <h4 className="text-md">{title}</h4>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{content}</CardBody>
    </Card>
  );
}
