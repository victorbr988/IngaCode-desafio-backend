import { Colaborators } from "@prisma/client";
import { findAllColaboratorsModel } from "../../models/colaborator/findAllcolaboratorsModel";

export async function findAllColaboratorsService(): Promise<Colaborators[]> {
  const colaborators: Colaborators[] = await findAllColaboratorsModel();

  return colaborators;
};
