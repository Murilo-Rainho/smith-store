import { NextFunction, Response, Request } from 'express';

import jwt from 'jsonwebtoken';

import prismaClient from '../../database/prismaClient';
import { User } from '../../interfaces';

const getUser = async (username: string): Promise<User | null> => {
  const user = await prismaClient.users.findFirst({
    where: { username },
  });

  return user;
};

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Token not found' });
    }

    // this usually stays in the environment variables.
    // Here, it's only out, for study reasons.
    const secret = 'mySuperSecret';

    const username = jwt.verify(token, secret);

    const user = await getUser(username.toString());

    req.tokenData = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;
