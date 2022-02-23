import {
  Request,
  Response,
  NextFunction,
} from 'express';

import { HttpException, ObjectError } from '../interfaces';

const errorHandler = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response<ObjectError> => {
  // console.log(error);
  const returnResponse: ObjectError = {
    error: `Something went wrong: ${error.message}`,
  };
  return res.status(422).json(returnResponse);
};

export default errorHandler;
