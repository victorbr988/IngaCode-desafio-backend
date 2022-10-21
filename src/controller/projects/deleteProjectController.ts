import { Request, Response } from "express";
import { deleteProjectService } from "../../services/projects/deleteProjectService";
import { statusCode } from "../../utils/StatusCode";

export async function deleteProjectController(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  await deleteProjectService(id)

  return response.status(statusCode.OK).json({ message: "Projeto deletado!" });
};
