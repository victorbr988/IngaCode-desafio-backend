import { Projects } from "@prisma/client";
import { updateProjectModel } from "../../models/projects/updateProjectModel";

export async function updateProjectService(props: Projects): Promise<Projects> {
  const {
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  } = props;

  const Project = await updateProjectModel({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })

  return Project;
};
