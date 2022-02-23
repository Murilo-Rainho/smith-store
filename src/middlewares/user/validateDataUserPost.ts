import { Request, Response, NextFunction } from 'express';

import joi from 'joi';

const userDataSchema = joi.object({
  username: joi.string().min(3).required().messages({
    'string.base': 'Username must be a string',
    'string.required': 'Username is required',
    'string.min': 'Username must be longer than 2 characters',
  }),
  classe: joi.string().min(3).required().messages({
    'string.base': 'Classe must be a string',
    'string.required': 'Classe is required',
    'string.min': 'Classe must be longer than 2 characters',
  }),
  level: joi.number().min(1).required().messages({
    'number.base': 'Level must be a number',
    'number.required': 'Level is required',
    'number.min': 'Level must be greater than 0',
  }),
  password: joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'string.required': 'Password is required',
    'string.min': 'Password must be longer than 7 characters',
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
