import express from "express";
import { findAllColaboratorsController } from "../controller/colaborator/findAllColaborators";

export const colaboratorRoute = express.Router();

colaboratorRoute.get('/', findAllColaboratorsController);
