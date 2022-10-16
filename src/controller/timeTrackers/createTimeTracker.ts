import { Request, Response } from "express";
import { createTimeTrackerService } from "../../services/timeTrackers/createTimeTrackerService";
import { statusCode } from "../../utils/StatusCode";
import { TimeTrackerProps } from "../../utils/types";

export async function createTimeTrackerController(request: Request, response: Response): Promise<Response> {
  const {
    startDate,
    endDate,
    taskId,
    colaboratorId
  }: TimeTrackerProps = request.body;

  const timeTrackerId: string = await createTimeTrackerService({
    startDate,
    endDate,
    taskId,
    colaboratorId
  });

  return response.status(statusCode.CREATED).json({ id: timeTrackerId});
};
