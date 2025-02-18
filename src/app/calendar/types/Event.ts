export interface Event {
  id: string;
  title: string;
  type: 'individual' | 'group';
  start: Date;
  end: Date;
  color: string;
  employeeId: string;
  clientIds: string[];
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'none';
    endDate?: Date;
  };
}