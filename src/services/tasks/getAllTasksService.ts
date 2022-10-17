import { Tasks } from "@prisma/client";
import { getAllTasksModel } from "../../models/tasks/getAllTasksModel";

export async function getAllTasksService(): Promise<Tasks[]> {
  const allTasks = await getAllTasksModel();

  return allTasks;
};
