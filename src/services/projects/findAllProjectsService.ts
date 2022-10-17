import { Projects } from "@prisma/client";
import { findAllProjectsModel } from "../../models/projects/findAllProjectsModel";

export async function findAllProjectsService(): Promise<Projects[]> {
  const allProjects: Projects[] = await findAllProjectsModel();

  return allProjects;
};
