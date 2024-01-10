/*
  Warnings:

  - You are about to drop the column `academicSemsterId` on the `students` table. All the data in the column will be lost.
  - Added the required column `academicSemesterId` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicSemsterId_fkey";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "academicSemsterId",
ADD COLUMN     "academicSemesterId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_academicSemesterId_fkey" FOREIGN KEY ("academicSemesterId") REFERENCES "academic_semsters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
