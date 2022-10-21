import { Projects } from "@prisma/client";
import { createProjectModel } from "../../models/projects/createProjectModel";

export async function createProjectService(props: Projects): Promise<Projects> {
  const {
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const idProject = await createProjectModel({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })

  return idProject;
};
