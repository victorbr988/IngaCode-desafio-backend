import { Projects } from "@prisma/client";
import { Request, Response } from "express";
import { findAllProjectsService } from "../../services/projects/findAllProjectsService";
import { statusCode } from "../../utils/StatusCode";

export async function findAllProjectsController(_request: Request, response: Response): Promise<Response> {
  const allProjects: Projects[] = await findAllProjectsService();

  return response.status(statusCode.OK).json(allProjects);
};
