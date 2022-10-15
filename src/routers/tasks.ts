import express from "express";
import { createTaskController } from "../controller/tasks/createTask";

export const tasksRouter = express.Router();

tasksRouter.post('/', createTaskController)
