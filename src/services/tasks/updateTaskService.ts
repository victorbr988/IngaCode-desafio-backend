import { updateTaskModel } from "../../models/tasks/updateTaskModel";
import { Tasks } from "@prisma/client";

export async function updateTaskService(props: Tasks): Promise<Tasks> {
  const {
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  } = props;
  
  const taskId = await updateTaskModel({
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  });

  return taskId;
};
