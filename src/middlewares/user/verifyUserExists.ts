import { Request, Response, NextFunction } from 'express';

import { getUserToLogin } from '../../models/user';

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const user = await getUserToLogin(data);

    if (user.length === 0) {
      return res.status(401).json({ error: 'Username or password invalid' });
    }
  
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyUserExists;
