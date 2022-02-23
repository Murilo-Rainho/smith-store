import { NextFunction, Response, Request } from 'express';

import jwt from 'jsonwebtoken';

const validateToken = (
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

    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;
