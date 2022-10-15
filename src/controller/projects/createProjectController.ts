import { Projects } from "@prisma/client";
import { Request, Response } from "express";
import { createProjectService } from "../../services/projects/createProjectService";
import { statusCode } from "../../utils";

export async function createProjectController(request: Request, response: Response): Promise<Response> {
  const { 
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  }: Projects = request.body

  const idProject = await createProjectService({ 
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  });

  return response.status(statusCode.CREATED).json({ id: idProject})
}