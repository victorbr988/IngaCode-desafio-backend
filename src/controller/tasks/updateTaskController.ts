
import { Request, Response } from "express";
import { statusCode } from "../../utils/StatusCode";
import { updateTaskService } from "../../services/tasks/updateTaskService";
import { Tasks } from "@prisma/client";

export async function updateTaskController(request: Request, response: Response): Promise<Response> {
  const {
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  }: Tasks = request.body;
  const { id } = request.params;

  const taskId: string = await updateTaskService({
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  });

  return response.status(statusCode.CREATED).json({ id: taskId})
}
