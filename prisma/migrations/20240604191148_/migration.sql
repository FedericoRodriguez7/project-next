/*
  Warnings:

  - Changed the type of `tecnologia` on the `Programadores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Programadores" DROP COLUMN "tecnologia",
ADD COLUMN     "tecnologia" "Tecnologias" NOT NULL;

-- CreateIndex
CREATE INDEX "Programadores_tecnologia_idx" ON "Programadores"("tecnologia");
