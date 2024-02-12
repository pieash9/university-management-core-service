/*
  Warnings:

  - You are about to drop the column `marks` on the `student_enrolled_courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_enrolled_courses" DROP COLUMN "marks",
ADD COLUMN     "totalMarks" INTEGER DEFAULT 0;
