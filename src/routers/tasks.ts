import express from "express";
import { createTaskController } from "../controller/tasks/createTaskController";
import { deleteTaskController } from "../controller/tasks/deleteTaskController";
import { getAllTasksController } from "../controller/tasks/getAllTaskscontroller";
import { updateTaskController } from "../controller/tasks/updateTaskController";

export const tasksRouter = express.Router();

tasksRouter.post('/', createTaskController);
tasksRouter.get('/', getAllTasksController);
tasksRouter.put('/:id', updateTaskController);
tasksRouter.delete('/:id', deleteTaskController);
