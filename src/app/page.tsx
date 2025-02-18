import Image from "next/image";

import Stats from '@/app/components/Stats';
import Attendance from '@/app/components/Attendance';
import Calendar from '@/app/components/Calendar';
import AddToCalendar from '@/app/components/AddToCalendar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 sm:p-6">
        <h1 className="text-xl font-semibold mb-4 sm:mb-6">Dashboard</h1>
        <div className="text-sm text-gray-500 mb-4 sm:mb-6">Wszystkie niezbędne informacje na jednym ekranie</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6">
            <Stats />
            <Attendance />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <Calendar />
            <AddToCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}

