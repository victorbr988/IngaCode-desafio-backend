import { createTaskModel } from "../../models/tasks/createTaskModel";
import { Tasks } from "@prisma/client";

export async function createTaskService(props: Tasks): Promise<Tasks> {
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
  
  const task = await createTaskModel({
    id,
    name,
    description,
    projectId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  });

  return task;
};
