import Image from "next/image";

import Calendar from '@/app/components/CalendarDashboard/Calendar';
import CreateEvent from '@/app/components/CreateEvent';
import Stats from '@/app/components/StatCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 sm:p-6">
        <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
        <div className="text-sm text-gray-500 mb-4">Wszystkie niezbędne informacje na jednym ekranie</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lewa kolumna - Kalendarz */}
          <div>
            <Calendar />
          </div>

          {/* Prawa kolumna - Formularz i statystyki */}
          <div className="space-y-6">
            <CreateEvent />
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
}