import { createTimeTrackerModel } from "../../models/timeTracker/createTimeTrackerModel";
import { TimeTrackerProps } from "../../utils/types";

export async function createTimeTrackerService(props: TimeTrackerProps): Promise<string> {
  const {
    startDate,
    endDate,
    taskId,
    colaboratorId
  } = props;

  const timeTrackerId: string = await createTimeTrackerModel({
    startDate,
    endDate,
    taskId,
    colaboratorId
  });

  return timeTrackerId;
};
