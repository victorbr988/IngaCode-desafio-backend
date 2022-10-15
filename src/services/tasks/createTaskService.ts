import { createTaskModel } from "../../models/tasks/createTaskModel";
import { Tasks } from "@prisma/client";

export async function createTaskService(props: Tasks): Promise<string> {
  const {
    id,
    name,
    description,
    projectId,
    createdAt,
    updatedAt,
    deletedAt
  } = props;
  
  const taskId: string = await createTaskModel({
    id,
    name,
    description,
    projectId,
    createdAt,
    updatedAt,
    deletedAt
  });

  return taskId;
}