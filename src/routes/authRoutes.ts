import { Router } from "express";
import * as authControlls from "../controllers/authControllers";

const authRoutes = Router();

authRoutes.post("/signin", authControlls.signInControll);

authRoutes.post("/signup", authControlls.signUpControll);

export default authRoutes;
