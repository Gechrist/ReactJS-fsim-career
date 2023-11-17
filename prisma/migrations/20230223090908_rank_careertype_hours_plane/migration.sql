/*
  Warnings:

  - The `rank` column on the `Career` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `flightHours` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('PILOTCADET', 'SECONDOFFICER', 'FIRSTOFFICER', 'CAPTAIN', 'SENIORCAPTAIN');

-- CreateEnum
CREATE TYPE "CareerType" AS ENUM ('AIRLINE', 'CARGO', 'CORPORATE');

-- AlterTable
ALTER TABLE "Career" ADD COLUMN     "flightHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "type" "CareerType" NOT NULL DEFAULT 'AIRLINE',
DROP COLUMN "rank",
ADD COLUMN     "rank" "Rank" NOT NULL DEFAULT 'PILOTCADET';

-- CreateTable
CREATE TABLE "AircraftType" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "range" INTEGER NOT NULL,
    "careerId" TEXT NOT NULL,

    CONSTRAINT "AircraftType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AircraftType_careerId_key" ON "AircraftType"("careerId");

-- AddForeignKey
ALTER TABLE "AircraftType" ADD CONSTRAINT "AircraftType_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
