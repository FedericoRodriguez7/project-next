/*
  Warnings:

  - You are about to drop the `Reserva` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_userId_fkey";

-- DropTable
DROP TABLE "Reserva";

-- CreateTable
CREATE TABLE "Conferencia" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "entradas" INTEGER NOT NULL DEFAULT 10000,

    CONSTRAINT "Conferencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Conferencia_fecha_idx" ON "Conferencia"("fecha");
