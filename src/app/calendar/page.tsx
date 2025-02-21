'use client';

import React from 'react';
import Calendar from './components/Calendar';

const CalendarPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <p className="text-sm text-gray-600 mb-2">Kalendarze pracowników. Wyświetlaj, dodawaj, edytuj zajęcia.</p>
      <Calendar />
    </div>
  );
};

export default CalendarPage;