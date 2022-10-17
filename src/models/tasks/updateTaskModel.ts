import { PrismaClient, Tasks } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateTaskModel(props: Tasks): Promise<string> {
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
      name,
      description,
      projectId,
      colaboratorId,
      createdAt,
      updatedAt,
      deletedAt
    },
  });
  return task.id;
};
