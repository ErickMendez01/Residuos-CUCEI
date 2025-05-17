/*
  Warnings:

  - You are about to drop the column `fecha_extraccion` on the `Componente` table. All the data in the column will be lost.
  - You are about to drop the column `año_fabricacion` on the `Dispositivo` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_registro` on the `Dispositivo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Componente_numero_key";

-- AlterTable
ALTER TABLE "Componente" DROP COLUMN "fecha_extraccion";

-- AlterTable
ALTER TABLE "Dispositivo" DROP COLUMN "año_fabricacion",
DROP COLUMN "fecha_registro";
