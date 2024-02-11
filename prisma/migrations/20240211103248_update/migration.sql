/*
  Warnings:

  - You are about to drop the column `academicSemeserId` on the `student_enrolled_course_marks` table. All the data in the column will be lost.
  - You are about to drop the column `academicSemeserId` on the `student_semester_payments` table. All the data in the column will be lost.
  - Added the required column `academicSemesterId` to the `student_enrolled_course_marks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `academicSemesterId` to the `student_semester_payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "student_enrolled_course_marks" DROP CONSTRAINT "student_enrolled_course_marks_academicSemeserId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_payments" DROP CONSTRAINT "student_semester_payments_academicSemeserId_fkey";

-- AlterTable
ALTER TABLE "student_enrolled_course_marks" DROP COLUMN "academicSemeserId",
ADD COLUMN     "academicSemesterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "student_semester_payments" DROP COLUMN "academicSemeserId",
ADD COLUMN     "academicSemesterId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "student_enrolled_course_marks" ADD CONSTRAINT "student_enrolled_course_marks_academicSemesterId_fkey" FOREIGN KEY ("academicSemesterId") REFERENCES "academic_semsters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_semester_payments" ADD CONSTRAINT "student_semester_payments_academicSemesterId_fkey" FOREIGN KEY ("academicSemesterId") REFERENCES "academic_semsters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
