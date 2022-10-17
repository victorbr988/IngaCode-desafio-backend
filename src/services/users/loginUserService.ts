import { Users } from "@prisma/client";
import { createUserModel, findUserModel } from "../../models/users/loginUserModel";

export async function createUserService(props: Users): Promise<void> {
  await createUserModel(props);
}

export async function findUserService(userName: string): Promise<Users | null> {
  const user = await findUserModel(userName);

  return user;
}
