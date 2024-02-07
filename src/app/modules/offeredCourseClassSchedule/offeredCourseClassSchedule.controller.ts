import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.insertIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course Class Schedule created',
    data: result,
  });
});

export const OfferedCourseClassScheduleController = { insertIntoDb };
