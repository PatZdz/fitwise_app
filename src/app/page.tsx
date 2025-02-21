'use client';

import Calendar from '@/app/Dashboard/CalendarDashboard/Calendar';
import CreateEvent from '@/app/Dashboard/CreateEvent/index';
import Stats from '@/app/Dashboard/StatCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
      <div className="text-sm text-gray-500 mb-4">
        Wszystkie niezbędne informacje na jednym ekranie
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Calendar />
        </div>
        <div className="space-y-6">
          <CreateEvent />
          <Stats />
        </div>
      </div>
    </div>
  );
}