import { Request, Response, NextFunction } from 'express';

interface error {
  type: string;
  message: string;
}

const ERRORS: any = {
  unauthorized: 401,
  conflict: 409,
  not_found: 404,
  bad_request: 400
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function errorHandler(error: error, req: Request, res: Response, next: NextFunction) {
  let statusCode: number = ERRORS[error.type];

  if (!statusCode) {
    console.log(error, Date.now());
    statusCode = 500;
    return res.sendStatus(statusCode); // internal server error
  }

  return res.status(statusCode).send(error.message);
}