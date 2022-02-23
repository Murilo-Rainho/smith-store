import { NextFunction, Request, Response } from 'express';
import { getOrderByIdService } from '../../services/order';

const getOrderByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const order = await getOrderByIdService(Number(id));

    if (order.error) {
      return res.status(404).json(order);
    }

    return res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export default getOrderByIdController;
