import { PrismaClient, Projects } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAllProjectsModel(): Promise<Projects[]> {
  const allProjects: Projects[] = await prisma.projects.findMany();

  return allProjects;
};
