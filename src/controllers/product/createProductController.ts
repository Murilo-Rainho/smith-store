import { Response, Request, NextFunction } from 'express';

import { createProductService } from '../../services/product';

import { Product } from '../../interfaces';

const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<Product> | void> => {
  try {
    const data = req.body;
  
    const createdProduct = await createProductService(data);
  
    return res.status(201).json({ item: createdProduct });
  } catch (error) {
    next(error);
  }
};

export default createProductController;
