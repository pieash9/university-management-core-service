import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidations } from './building.validation';

const router = express.Router();

router.get('/', BuildingController.getAllFromDb);

router.post(
  '/',
  validateRequest(BuildingValidations.create),
  BuildingController.insertIntoDb
);

export const BuildingRoutes = router;
