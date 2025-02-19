'use client';

import React from 'react';
import Calendar from './components/Calendar';

const CalendarPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-600 mb-2">Kalendarze pracowników. Wyświetlaj, dodawaj, edytuj zajęcia.</p>
          <Calendar />
        </div>
      </main>
    </>
  );
};

export default CalendarPage;