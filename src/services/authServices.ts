import * as interfaces from '../interfaces/usersInteface';
import * as authRepositories from '../repositories/authRepos';
import * as errors from '../utils/errors';
import * as bcrypt from '../utils/bcryptUtil';
import * as jwt from '../utils/jwtUtil';
import { objIsEmpty } from '../utils/tool';

export async function signUp(inputData: interfaces.signUpI) {
  const { username, email, password } = inputData;
  const errorsMessage: { [key: string]: any } = {};

  const emailExists = await authRepositories.findUserByEmail(email);
  const usernameExists = await authRepositories.findUserByUsername(username);

  if (emailExists) errorsMessage['email'] = 'E-mail já existe!';
  if (usernameExists) errorsMessage['username'] = 'Username já existe!';

  if (!objIsEmpty(errorsMessage)) throw errors.conflictError(errorsMessage);

  const passwordCrypted = bcrypt.hashPassword(password);

  await authRepositories.registerNewUser({ ...inputData, password: passwordCrypted });
}

export async function signIn(inputData: Omit<interfaces.signUpI, 'name'>) {
  const { email, password } = inputData;

  const emailExists = await authRepositories.findUserByEmail(email);
  if (!emailExists) throw errors.unauthorizedError({ authenticationError: 'E-mail ou senha está incorreto!' });

  const passwordValidate = bcrypt.comparePasswords(password, emailExists.password);
  if (!passwordValidate) throw errors.unauthorizedError({ authenticationError: 'E-mail ou senha está incorreto!' });

  return jwt.createToken({ username: emailExists.username });
}