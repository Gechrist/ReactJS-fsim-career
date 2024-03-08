-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('PILOTCADET', 'SECONDOFFICER', 'FIRSTOFFICER', 'CAPTAIN', 'SENIORCAPTAIN');

-- CreateEnum
CREATE TYPE "CareerType" AS ENUM ('AIRLINE', 'CARGO', 'CORPORATE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "darkMode" BOOLEAN NOT NULL DEFAULT false,
    "autAdvance" BOOLEAN NOT NULL DEFAULT true,
    "autAdvanceData" JSONB NOT NULL DEFAULT '{"secOfficer": "250","firOfficer": "1000","cpt": "1500","srCaptain": "4000"}',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Career" (
    "id" TEXT NOT NULL,
    "base" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "aircraft" TEXT NOT NULL DEFAULT '',
    "flightHours" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "name" TEXT NOT NULL DEFAULT '',
    "rank" "Rank" NOT NULL DEFAULT 'PILOTCADET',
    "careerType" "CareerType" NOT NULL DEFAULT 'AIRLINE',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logbook" (
    "id" TEXT NOT NULL,
    "careerId" TEXT NOT NULL,

    CONSTRAINT "Logbook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispatch" (
    "id" TEXT NOT NULL,
    "data" JSONB,
    "careerId" TEXT NOT NULL,

    CONSTRAINT "Dispatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "logbookId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Logbook_careerId_key" ON "Logbook"("careerId");

-- CreateIndex
CREATE UNIQUE INDEX "Dispatch_careerId_key" ON "Dispatch"("careerId");

-- AddForeignKey
ALTER TABLE "Career" ADD CONSTRAINT "Career_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logbook" ADD CONSTRAINT "Logbook_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispatch" ADD CONSTRAINT "Dispatch_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_logbookId_fkey" FOREIGN KEY ("logbookId") REFERENCES "Logbook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
