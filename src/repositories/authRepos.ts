import dbClient from '../database/dbClient';
import * as userInterface from '../interfaces/usersInteface';

export async function findUserByEmail(email: string) {
  return await dbClient.users.findUnique({ where: { email } });
}

export async function findUserByUsername(username: string) {
  return await dbClient.users.findUnique({ where: { username } });
}

export async function registerNewUser(userData: userInterface.signUpI) {
  return await dbClient.users.create({ data: userData });
}
