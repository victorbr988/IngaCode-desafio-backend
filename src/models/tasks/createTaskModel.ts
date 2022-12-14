import { PrismaClient, Tasks } from "@prisma/client";
import { v4 } from 'uuid';

const prisma = new PrismaClient()

export async function createTaskModel(props: Tasks): Promise<Tasks> {
  const {
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const task = await prisma.tasks.create({
    data: {
      id: v4(),
      name,
      description,
      projectId,
      colaboratorId,
      createdAt,
      updatedAt,
      deletedAt
    }
  })
  return task;
};
