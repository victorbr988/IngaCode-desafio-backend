import { Request, Response } from "express";
import { getAllTasksService } from "../../services/tasks/getAllTasksService";
import { statusCode } from "../../utils/StatusCode";

export async function getAllTasksController(_request: Request, response: Response): Promise<Response> {
  const allTasks = await getAllTasksService();

  return response.status(statusCode.OK).json({ allTasks });
};