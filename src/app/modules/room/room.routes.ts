import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.post('/', RoomController.insertIntoDb);

export const RoomRoutes = router;
