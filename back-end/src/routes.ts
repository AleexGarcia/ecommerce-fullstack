import { Router } from "express";
import UserController from "./controllers/UserController";

export const router = Router();
const userController = new UserController();

router.get('/auth/signup', userController.signup);
router.get('/auth/login', userController.login);