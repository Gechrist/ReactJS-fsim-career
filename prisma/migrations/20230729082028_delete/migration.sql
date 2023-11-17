/*
  Warnings:

  - You are about to drop the `AircraftType` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[careerId]` on the table `Dispatch` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AircraftType" DROP CONSTRAINT "AircraftType_careerId_fkey";

-- AlterTable
ALTER TABLE "Career" ADD COLUMN     "aircraft" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "AircraftType";

-- CreateIndex
CREATE UNIQUE INDEX "Dispatch_careerId_key" ON "Dispatch"("careerId");
