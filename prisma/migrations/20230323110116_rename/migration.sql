/*
  Warnings:

  - You are about to drop the column `type` on the `Career` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Career" DROP COLUMN "type",
ADD COLUMN     "careerType" "CareerType" NOT NULL DEFAULT 'AIRLINE';
