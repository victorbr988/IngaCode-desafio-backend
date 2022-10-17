import { PrismaClient, TimeTrackers } from "@prisma/client";
import { v4 } from "uuid";
import { TimeTrackerProps } from "../../utils/types";

const prisma = new PrismaClient();

export async function createTimeTrackerModel(props: TimeTrackerProps) {
  const {
    startDate,
    endDate,
    taskId,
    colaboratorId
  } = props;

  const date: string[] = Date().split(' ');


  const timeTracker: TimeTrackers = await prisma.timeTrackers.create({
    data: {
      id: v4(),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      timeZoneId: date[5],
      taskId,
      colaboratorId
    },
  });

  return timeTracker.id;
};
