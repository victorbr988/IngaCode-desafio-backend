import { createColaboratorModel } from "../../models/colaborator/createColaboratorModel";
import { ColaboratorProps } from "../../utils/types";

export async function createColaboratorService(props: ColaboratorProps): Promise<string> {
  const { name } = props;

  const colaboratorId: string = await createColaboratorModel({ name });

  return colaboratorId;
};
