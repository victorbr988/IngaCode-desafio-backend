import { Request, Response } from "express";
import { statusCode } from "../../utils/StatusCode";
import { createTaskService } from "../../services/tasks/createTaskService";
import { Tasks } from "@prisma/client";

export async function createTaskController(request: Request, response: Response): Promise<Response> {
  const {
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  }: Tasks = request.body;

  const task = await createTaskService({
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  });

  return response.status(statusCode.CREATED).json({task});
};
