/*
  Warnings:

  - The values [ReactJS,AngularJS,NodeJS,Python,Java] on the enum `Tecnologias` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Tecnologias_new" AS ENUM ('Frontend', 'Backend');
ALTER TABLE "Programadores" ALTER COLUMN "tecnologia" TYPE "Tecnologias_new" USING ("tecnologia"::text::"Tecnologias_new");
ALTER TYPE "Tecnologias" RENAME TO "Tecnologias_old";
ALTER TYPE "Tecnologias_new" RENAME TO "Tecnologias";
DROP TYPE "Tecnologias_old";
COMMIT;
