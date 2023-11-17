/*
  Warnings:

  - A unique constraint covering the columns `[dispatchId]` on the table `Entry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Entry_dispatchId_key" ON "Entry"("dispatchId");
