import { PrismaClient, Projects } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient();

export async function updateProjectModel(props: Projects): Promise<Projects> {
  const {
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const project = await prisma.projects.update({
    where: {
      id
    },
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
