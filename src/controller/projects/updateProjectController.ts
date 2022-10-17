
import { Projects } from "@prisma/client";
import { Request, Response } from "express";
import { updateProjectService } from "../../services/projects/updateProjectService";
import { statusCode } from "../../utils/StatusCode";

export async function updateProjectController(request: Request, response: Response): Promise<Response> {
  const { 
    name,
    createdAt,
    updatedAt,
    deletedAt
  }: Projects = request.body;
  const { id } = request.params;

  const idProject = await updateProjectService({ 
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  });

  return response.status(statusCode.CREATED).json({ id: idProject});
};
