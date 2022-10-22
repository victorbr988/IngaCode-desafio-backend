import { PrismaClient, Tasks } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient();

export async function updateTaskModel(props: Tasks): Promise<Tasks> {
  const {
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const task = await prisma.tasks.update({
    where: {
      id
    },
    data: {
      id: v4(),
      name,
      description,
      projectId,
      colaboratorId,
      createdAt,
      updatedAt,
      deletedAt
    },
  });
  return task;
};
