import { deleteProjectModel } from "../../models/projects/deleteProjectModel";

export async function deleteProjectService(id: string): Promise<void> {
  await deleteProjectModel(id);
};
