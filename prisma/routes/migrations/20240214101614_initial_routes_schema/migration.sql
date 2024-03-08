-- CreateTable
CREATE TABLE "Routes" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "icaoDep" TEXT NOT NULL,
    "icaoArr" TEXT NOT NULL,
    "aircraft" TEXT NOT NULL,
    "depTime" TEXT NOT NULL,
    "flightNo" TEXT NOT NULL,
    "depLat" DOUBLE PRECISION NOT NULL,
    "depLong" DOUBLE PRECISION NOT NULL,
    "arrLat" DOUBLE PRECISION NOT NULL,
    "arrLong" DOUBLE PRECISION NOT NULL,
    "distance" INTEGER NOT NULL,

    CONSTRAINT "Routes_pkey" PRIMARY KEY ("id")
);
