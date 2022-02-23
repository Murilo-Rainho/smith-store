import { NextFunction, Request, Response } from 'express';

import { getAllProductsService } from '../../services/product';

const getAllUsersController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allProducts = await getAllProductsService();
  
    return res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

export default getAllUsersController;
