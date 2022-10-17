import { Projects } from "@prisma/client";
import { updateProjectModel } from "../../models/projects/updateProjectModel";

export async function updateProjectService(props: Projects): Promise<string> {
  const {
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const idProject = await updateProjectModel({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })

  return idProject;
};
