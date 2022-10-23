import { Colaborators, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function findAllColaboratorsModel(): Promise<Colaborators[]> {
  const colaborators = await prisma.colaborators.findMany()

  return colaborators
};
