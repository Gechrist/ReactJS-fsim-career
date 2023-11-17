/*
  Warnings:

  - You are about to drop the column `dispatchId` on the `Entry` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_dispatchId_fkey";

-- DropIndex
DROP INDEX "Entry_dispatchId_key";

-- AlterTable
ALTER TABLE "Dispatch" ADD COLUMN     "data" JSONB;

-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "dispatchId";
