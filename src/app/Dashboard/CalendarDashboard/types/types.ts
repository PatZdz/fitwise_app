export interface CalendarClass {
    type: 'POMOC' | 'DZIŚ';
    time: string;
    title: string;
    trainer: string;
    participants: number;
  }
  
  export interface DayProps {
    date: number;
    isActive?: boolean;
    classes?: CalendarClass[];
  }