import { Request, Response, NextFunction } from 'express';

import joi from 'joi';

const orderDataSchema = joi.object({
  products: joi.array().strict().items(joi.number().min(1)).min(1)
    .required()
    .messages({
      'array.base': 'Products must be an array of numbers',
      'array.min': 'Products can\'t be empty',
      'any.required': 'Products is required',
    }),
});

const validateDataProductPost = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
  
    const { error } = orderDataSchema.validate(data);
  
    const statusCode = error?.message.match(/is required/i) ? 400 : 422;
  
    if (error) return res.status(statusCode).json({ error: error.message });
  
    next();
  } catch (error) {
    next(error);
  }
};

export default validateDataProductPost;
