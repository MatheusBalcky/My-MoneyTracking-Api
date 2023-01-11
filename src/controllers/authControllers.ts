import { Request, Response } from 'express';
import * as authServices from '../services/authServices'

export async function signUpControll(req: Request, res: Response) {
  const inputData = req.body;

  await authServices.signUp(inputData);

  return res.sendStatus(200);
}

export async function signInControll(req: Request, res: Response) {
  const userData = req.body;

  const token = await authServices.signIn(userData);

  return res.status(200).send({
    status: 'sucesss',
    time: new Date(),
    token
  });
}
