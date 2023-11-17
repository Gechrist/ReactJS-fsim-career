-- AlterTable
ALTER TABLE "User" ADD COLUMN     "autAdvance" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "autAdvanceData" JSONB NOT NULL DEFAULT '{"secOfficer": "250","firOfficer": "1000","cpt": "1500","srCaptain": "4000"}',
ADD COLUMN     "darkMode" BOOLEAN NOT NULL DEFAULT false;
