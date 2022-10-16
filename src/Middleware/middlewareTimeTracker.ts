import { NextFunction, Request, Response } from "express";
import { statusCode } from "../utils/StatusCode";
import { PrismaClient, TimeTrackers } from "@prisma/client";
import { TimeTrackerProps } from "../utils/types";

export async function validateTimeTracker(request: Request, response: Response, next: NextFunction) {
  const {
    startDate,
    endDate,
    taskId,
  }: TimeTrackerProps = request.body;
  const prisma = new PrismaClient()

  const start: number = new Date(startDate).getTime();
  const end: number = new Date(endDate).getTime();
  const allTimeTrackers: TimeTrackers[] = await prisma.timeTrackers.findMany({
    where: { taskId }
  });

  if (start > end) {
    return response.status(statusCode.INVALID_DATA).json({ message: "Invalid Date"})
  }

  for (let index = 0; index < allTimeTrackers.length; index += 1 ) {
    const start: number = new Date(allTimeTrackers[index].startDate).getTime();
    const end: number = new Date(allTimeTrackers[index].endDate).getTime();
    const startDateRequest: number = new Date(startDate).getTime();
    const endDateRequest: number = new Date(endDate).getTime();
    const dayStart: number = new Date(allTimeTrackers[index].startDate).getDay();
    const dayStartRequest: number = new Date(startDate).getDay();

    if (dayStart === dayStartRequest) {
      if (start >= startDateRequest && endDateRequest <= end ) {
        return response.status(statusCode.INVALID_DATA).json({ message: "Date have invalid time"})
      }
    }
  }

  next()
};
