import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteProjectModel(id: string): Promise<void> {
  await prisma.projects.delete({
    where: {
      id,
    },
  });
};
