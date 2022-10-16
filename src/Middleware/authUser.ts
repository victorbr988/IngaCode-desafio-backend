import { NextFunction, Request, Response } from "express";
import { statusCode } from "../utils/StatusCode";
import { validateToken } from "../utils/token";
import { PrismaClient, Users } from "@prisma/client";

export function authUser(request: Request, response: Response, next: NextFunction): Response | void {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(statusCode.NOT_FOUNT).json({ message: "Token not found" });
  };

  try {
    validateToken(authorization);
  } catch(err) {
    return response.status(statusCode.INVALID_DATA).json({ message: "invalid or expired token"});
  };

  next();
};

export async function validateUser(request: Request, response: Response, next: NextFunction) {
  const { userName, password } = request.body;
  const prisma = new PrismaClient();

  if (!userName || !password) {
    return response.status(statusCode.INVALID_DATA).json({ message: "E-mail or password invalid"});
  };

  const user: Users | null = await prisma.users.findUnique({
    where: {
      userName
    },
  });

  if (user) {
    return response.status(statusCode.INVALID_DATA).json({ message: "Username alread exists" });
  };

  next();
};
