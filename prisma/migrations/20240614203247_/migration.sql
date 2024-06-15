/*
  Warnings:

  - You are about to drop the `_UserConferencias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserConferencias" DROP CONSTRAINT "_UserConferencias_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserConferencias" DROP CONSTRAINT "_UserConferencias_B_fkey";

-- AlterTable
ALTER TABLE "Conferencia" ADD COLUMN     "reservado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_UserConferencias";

-- AddForeignKey
ALTER TABLE "Conferencia" ADD CONSTRAINT "Conferencia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
