import { Response, Request, NextFunction } from 'express';

import { createUserService } from '../../services/user';

const createUserController = async (
  req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response> => {
  const data = req.body;

  const createdUser = await createUserService(data);

  return res.status(200).json(createdUser);
};

export default createUserController;
