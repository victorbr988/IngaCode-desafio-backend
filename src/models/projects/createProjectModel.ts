import { PrismaClient, Projects } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient();

export async function createProjectModel(props: Projects): Promise<Projects> {
  const {
    name,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const project = await prisma.projects.create({
    data: {
      id: v4(),
      name,
      createdAt,
      updatedAt,
      deletedAt
    },
  });
  return project;
};
