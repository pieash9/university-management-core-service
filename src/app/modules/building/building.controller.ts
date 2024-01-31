import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { BuildingFilterableFields } from './building.constant';
import { BuildingService } from './building.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.insertIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building created Successfully',
    data: result,
  });
});

const getAllFromDb = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, BuildingFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await BuildingService.getAllFromDb(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building fetched Successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const BuildingController = { insertIntoDb, getAllFromDb };
