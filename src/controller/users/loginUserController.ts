import { Users } from "@prisma/client";
import { Request, Response } from "express";
import { createUserService, findUserService } from "../../services/users/loginUserService";
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

  const token = createToken({ userName, password });
  const user = await findUserService(userName);

  if (user) {
    return response.status(statusCode.OK).json({ token })
  };

  await createUserService({
    id,
    userName,
    password,
    createdAt,
    updatedAt,
    deletedAt
  });

  return response.status(statusCode.CREATED).json({ token });
};
