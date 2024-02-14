import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get(
  '/my-courses',
  auth(ENUM_USER_ROLE.FACULTY),
  FacultyController.myCourses
);

router.get(
  '/my-course-students',
  auth(ENUM_USER_ROLE.FACULTY),
  FacultyController.getMyCourseStudents
);

router.get('/:id', FacultyController.getByIdFromDB);

router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

router.post(
  '/:id/assign-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),
  FacultyController.assignCourses
);
router.delete(
  '/:id/remove-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),
  FacultyController.removeCourses
);

export const FacultyRoutes = router;
