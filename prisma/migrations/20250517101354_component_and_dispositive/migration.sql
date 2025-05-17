/*
  Warnings:

  - You are about to drop the column `emilVerified` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ResultadoClasificacion" AS ENUM ('REUTILIZAR', 'RECICLAR', 'DESECHABLE');

-- CreateEnum
CREATE TYPE "EstadoGeneral" AS ENUM ('FUNCIONAL', 'PARCIALMENTE_FUNCIONAL', 'DAÑADO');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emilVerified",
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Dispositivo" (
    "id_dispositivo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "año_fabricacion" INTEGER NOT NULL,
    "estado_general" "EstadoGeneral" NOT NULL,
    "resultado" "ResultadoClasificacion" NOT NULL,
    "justificacion" TEXT,
    "descripcion" TEXT,
    "categoria" TEXT,
    "numero" TEXT,
    "ubicacion" TEXT,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id_dispositivo")
);

-- CreateTable
CREATE TABLE "Componente" (
    "id_componente" SERIAL NOT NULL,
    "tipo_componente" TEXT NOT NULL,
    "estado_general" "EstadoGeneral" NOT NULL,
    "resultado" "ResultadoClasificacion" NOT NULL,
    "justificacion" TEXT,
    "observaciones" TEXT,
    "marca" TEXT,
    "modelo" TEXT,
    "numero" TEXT,
    "fecha_extraccion" TIMESTAMP(3),
    "ubicacion" TEXT,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Componente_pkey" PRIMARY KEY ("id_componente")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_numero_key" ON "Dispositivo"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "Componente_numero_key" ON "Componente"("numero");

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Componente" ADD CONSTRAINT "Componente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
