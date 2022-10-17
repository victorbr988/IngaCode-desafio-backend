import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function deleteTaskModel(id: string): Promise<void> {
  await prisma.tasks.delete({
    where: { id }
  });
};
