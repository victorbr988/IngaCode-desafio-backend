import { PrismaClient, Users } from "@prisma/client";
import { v4 } from "uuid";
import { encrypted } from "../../utils/bcrypt";

const prisma = new PrismaClient();

export async function createUserModel(props: Users): Promise<void> {
  const { userName, password } = props;

  const newPassword: string = await encrypted(password);
  await prisma.users.create({
    data: {
      id: v4(),
      userName,
      password: newPassword
    },
  });
  await prisma.colaborators.create({
    data: {
      id: v4(),
      name: userName
    }
  })

};

export async function findUserModel(userName: string): Promise<Users | null> {
  const user = prisma.users.findUnique({
    where: { userName }
  });

  return user;
};
