-- CreateTable
CREATE TABLE "_UserConferencias" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserConferencias_AB_unique" ON "_UserConferencias"("A", "B");

-- CreateIndex
CREATE INDEX "_UserConferencias_B_index" ON "_UserConferencias"("B");

-- AddForeignKey
ALTER TABLE "_UserConferencias" ADD CONSTRAINT "_UserConferencias_A_fkey" FOREIGN KEY ("A") REFERENCES "Conferencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserConferencias" ADD CONSTRAINT "_UserConferencias_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
