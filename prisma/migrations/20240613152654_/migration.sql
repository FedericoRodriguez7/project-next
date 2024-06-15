-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "conferenciaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
