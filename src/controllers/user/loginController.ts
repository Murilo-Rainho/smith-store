import { Request, Response, NextFunction } from 'express';

import { createToken } from '../../middlewares/auth';

const loginController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
  
    const token = createToken(data.username);
  
    return res.status(200).json({ token, user: data });
  } catch (error) {
    next(error);
  }
};

export default loginController;
