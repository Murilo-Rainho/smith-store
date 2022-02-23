import { Request, Response, NextFunction } from 'express';

import joi from 'joi';

const userDataSchema = joi.object({
  username: joi.string().min(3).required().messages({
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
    'any.required': 'Username is required',
  }),
  password: joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
    'any.required': 'Password is required',
  }),
});

const validateDataUserPost = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
  
    const { error } = userDataSchema.validate(data);
  
    const statusCode = error?.message.match(/is required/i) ? 400 : 422;
  
    if (error) return res.status(statusCode).json({ error: error.message });
  
    next();
  } catch (error) {
    next(error);
  }
};

export default validateDataUserPost;
