import express from 'express';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  // {
  //   path: '/students',
  //   route: studentRoutes
  // },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
