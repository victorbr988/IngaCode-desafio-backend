export interface CreateTokenProps {
  userName: string;
  password: string;
};

export interface ColaboratorProps {
  name: string;
};

export interface TimeTrackerProps {
  startDate: string;
  endDate: string;
  timeZoneId?: string;
  taskId: string;
  colaboratorId: string;
};
