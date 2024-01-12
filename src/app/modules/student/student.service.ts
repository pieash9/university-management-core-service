import { Student } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDb = async (data: Student) => {
  const result = await prisma.student.create({
    data,
    include: {
      academicDepartment: true,
      academicFaculty: true,
      academicSemester: true,
    },
  });
};
