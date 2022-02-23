import { NextFunction, Request, Response } from 'express';
import { createOrderService } from '../../services/order';

const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      tokenData,
      body: { products },
    } = req;

    const allOrders = await createOrderService(tokenData, products);

    return res.status(201).json({ order: allOrders });
  } catch (error) {
    next(error);
  }
};

export default createOrderController;
