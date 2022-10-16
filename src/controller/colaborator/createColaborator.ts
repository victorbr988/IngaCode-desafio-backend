import { Request, Response } from "express";
import { createColaboratorService } from "../../services/colaborator/createColaboratorService";
import { statusCode } from "../../utils/StatusCode";

export async function createColaboratorController(request: Request, response: Response): Promise<Response> {
  const { name } = request.body;

  const colaboratorId = await createColaboratorService({ name })

  return response.status(statusCode.CREATED).json({ id: colaboratorId })
}
