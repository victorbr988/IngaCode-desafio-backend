import express from "express";
import { createUserController } from "../controller/users/loginUserController";

export const userRouter = express.Router();

userRouter.post('/', createUserController)
