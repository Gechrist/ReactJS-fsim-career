-- DropForeignKey
ALTER TABLE "AircraftType" DROP CONSTRAINT "AircraftType_careerId_fkey";

-- AddForeignKey
ALTER TABLE "AircraftType" ADD CONSTRAINT "AircraftType_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;
