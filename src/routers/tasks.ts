import express from "express";
import { createTaskController } from "../controller/tasks/createTask";
import { getAllTasksController } from "../controller/tasks/getAllTaskscontroller";

export const tasksRouter = express.Router();

tasksRouter.post('/', createTaskController)
tasksRouter.get('/', getAllTasksController)
