import { NextFunction, Request, Response } from 'express';
import { getAllOrdersService } from '../../services/order';

const getAllOrdersController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await getAllOrdersService();

    return res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export default getAllOrdersController;
