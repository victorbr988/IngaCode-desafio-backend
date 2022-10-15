import express from "express";
import { createUserController } from "../controller/users/createUserController";

export const userRouter = express.Router();

userRouter.post('/', createUserController)
