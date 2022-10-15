import { Users } from "@prisma/client";
import { createUserModel } from "../../models/users/createUserModel";

export async function createUserService(props: Users): Promise<void> {
  await createUserModel(props);
}