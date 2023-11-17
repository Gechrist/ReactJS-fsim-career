/*
  Warnings:

  - You are about to drop the column `code` on the `AircraftType` table. All the data in the column will be lost.
  - Added the required column `type` to the `AircraftType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AircraftType" DROP COLUMN "code",
ADD COLUMN     "type" TEXT NOT NULL;
