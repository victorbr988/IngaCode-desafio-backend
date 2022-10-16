import express from "express";
import { createTimeTrackerController } from "../controller/timeTrackers/createTimeTracker";

export const timeTrackerRouter = express.Router();

timeTrackerRouter.post('/', createTimeTrackerController)
