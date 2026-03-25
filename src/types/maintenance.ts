export type MaintenanceItem = {
  bike_id: string;
  name: string;
  description: string;
};

export type HistoryItem = {
  bike_id: string;
  name: string;
  description: string;
  odo: string;
  date: string;
  notes: string;
};
