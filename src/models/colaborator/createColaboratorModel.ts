import { ColaboratorProps } from "../../utils/types";
import { Colaborators, PrismaClient } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient();

export async function createColaboratorModel(props: ColaboratorProps): Promise<string> {
  const { name } = props;

  const colaborator: Colaborators = await prisma.colaborators.create({
    data: {
      id: v4(),
      name,
    },
  });

  return colaborator.id;
};
