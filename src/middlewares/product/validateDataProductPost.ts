import { Request, Response, NextFunction } from 'express';

import joi from 'joi';

const productDataSchema = joi.object({
  name: joi.string().min(3).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
    'any.required': 'Name is required',
  }),
  amount: joi.string().min(3).required().messages({
    'string.base': 'Amount must be a string',
    'string.min': 'Amount must be longer than 2 characters',
    'any.required': 'Amount is required',
  }),
});

const validateDataProductPost = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
  
    const { error } = productDataSchema.validate(data);
  
    const statusCode = error?.message.match(/is required/i) ? 400 : 422;
  
    if (error) return res.status(statusCode).json({ error: error.message });
  
    next();
  } catch (error) {
    next(error);
  }
};

export default validateDataProductPost;
