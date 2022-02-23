import { User } from '../../src/interfaces';

declare global {
  namespace Express {
    export interface Request {
      tokenData: User;
    }
  }
}