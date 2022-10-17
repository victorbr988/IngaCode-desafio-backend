import { Request, Response } from "express";
import { deleteTaskService } from "../../services/tasks/deleteTaskService";
import { statusCode } from "../../utils/StatusCode";

export async function deleteTaskController(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  await deleteTaskService(id);

  return response.status(statusCode.OK).json({ message: "task deleted" });
};
