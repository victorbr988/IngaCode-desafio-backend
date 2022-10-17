import { PrismaClient, Tasks } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTasksModel(): Promise<Tasks[]> {
  const allTasks = await prisma.tasks.findMany({
    include: {
      colaboratorsId: true,
      time: true
    },
  });

  return allTasks;
};
