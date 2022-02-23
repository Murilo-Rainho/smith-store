import { Response, Request, NextFunction } from 'express';

import { createUserService } from '../../services/user';

import { createToken } from '../../middlewares/auth';

import { User } from '../../interfaces';

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<User> | void> => {
  try {
    const data = req.body;
  
    const createdUser = await createUserService(data);
  
    const token = createToken(createdUser.username);
  
    return res.status(201).json({ token, user: createdUser });
  } catch (error) {
    next(error);
  }
};

export default createUserController;
