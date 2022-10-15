import { Users } from "@prisma/client";
import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUserService";
import { statusCode } from "../../utils/StatusCode";
import { createToken } from "../../utils/token";

export async function createUserController(request: Request, response: Response): Promise<Response> {
  const {
    id,
    userName,
    password,
    createdAt,
    updatedAt,
    deletedAt
  }: Users = request.body;

  await createUserService({
    id,
    userName,
    password,
    createdAt,
    updatedAt,
    deletedAt
  });

  const token = createToken({ userName, password });

  return response.status(statusCode.CREATED).json({ token });
};
