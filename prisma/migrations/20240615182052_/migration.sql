-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "conferenciaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_userId_conferenciaId_key" ON "Reserva"("userId", "conferenciaId");

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_conferenciaId_fkey" FOREIGN KEY ("conferenciaId") REFERENCES "Conferencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
