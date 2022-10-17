import express from "express";
import { createProjectController } from "../controller/projects/createProjectController";
import { deleteProjectController } from "../controller/projects/deleteProjectController";
import { findAllProjectsController } from "../controller/projects/findAllProjectsController";
import { updateProjectController } from "../controller/projects/updateProjectController";

export const projectsRoute = express.Router();

projectsRoute.post('/', createProjectController);
projectsRoute.get('/', findAllProjectsController);
projectsRoute.put('/:id', updateProjectController);
projectsRoute.delete('/:id', deleteProjectController);
