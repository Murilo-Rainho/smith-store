declare namespace Express {
  export interface Request {
    tokenData?: string | JwtPayload;
  }
}
