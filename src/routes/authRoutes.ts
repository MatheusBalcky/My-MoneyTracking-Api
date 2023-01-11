import { Router } from 'express';
import validateSchemas from '../middlewares/validateSchemas';
import * as authSchemas from '../schemas/authSchemas';
import * as authControlls from '../controllers/authControllers';

const authRoutes = Router();

authRoutes.post('/signup', validateSchemas(authSchemas.signUp), authControlls.signUpControll);

authRoutes.post('/signin', authControlls.signInControll);

export default authRoutes;
