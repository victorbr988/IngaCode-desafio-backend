import { Colaborators } from "@prisma/client";
import { Request, Response } from "express";
import { findAllColaboratorsService } from "../../services/colaborator/findAllColaboratorsService";
import { statusCode } from "../../utils/StatusCode";

export async function findAllColaboratorsController(_request: Request, response: Response): Promise<Response> {
  const colaborators: Colaborators[] = await findAllColaboratorsService();

  return response.status(statusCode.OK).json(colaborators);
};
