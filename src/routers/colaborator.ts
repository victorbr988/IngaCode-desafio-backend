import express from "express";
import { createColaboratorController } from "../controller/colaborator/createColaborator";

export const colaboratorRoute = express.Router();

colaboratorRoute.post('/', createColaboratorController);
