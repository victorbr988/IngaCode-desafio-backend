import { NextFunction, Request, Response } from "express";
import { statusCode } from "../utils/StatusCode";
import { validateToken } from "../utils/token";
import { PrismaClient, Users } from "@prisma/client";
import { findUserService } from "../services/users/loginUserService";
import { comparePassword } from "../utils/bcrypt";

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

  if (!userName || !password) {
    return response.status(statusCode.INVALID_DATA).json({ message: "Name or password empty"});
  };

  const user = await findUserService(userName);

  if (user) {
    const isEqualPassword = await comparePassword(password, user.password);

    if (!isEqualPassword) {
      return response.status(statusCode.INVALID_DATA).json({ message: "password invalid" });
    };
  };

  next();
};
