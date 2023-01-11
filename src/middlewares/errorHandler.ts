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
export async function errorHandler(err: error, req: Request, res: Response, next: NextFunction) {
  let statusCode: number = ERRORS[err.type];
  if (!statusCode) {
    statusCode = 500;
    console.log({ ...err, time: new Date()});
    return res.sendStatus(statusCode); // internal server error
  }

  return res.status(statusCode).send(err);
}
