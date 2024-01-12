import { z } from 'zod';

const create = z.object({
  body: z.object({
    titles: z.string({
      required_error: 'Title is required',
    }),
    academicFacultyId: z.string({
      required_error: 'Academic faculty id is required',
    }),
  }),
});

export const AcademicDepartmentValidation = { create };
