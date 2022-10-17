import { deleteTaskModel } from "../../models/tasks/deleteTaskModel";

export async function deleteTaskService(id: string): Promise<void> {
  await deleteTaskModel(id);
};
