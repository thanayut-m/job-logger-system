-- AlterTable
ALTER TABLE "Hospital" ADD COLUMN     "hospital_status" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "hospital_date" DROP DEFAULT;
