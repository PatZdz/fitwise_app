'use client'

interface DayProps {
  date: number;
  isActive?: boolean;
}

interface CalendarDaysProps {
  days: DayProps[];
}

export default function CalendarDays({ days }: CalendarDaysProps) {
  return (
    <>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['PON', 'WTO', 'ŚRO', 'CZW', 'PIĄ', 'SOB', 'NIE'].map((day) => (
          <div key={day} className="text-center text-xs text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((day) => (
          <div
            key={day.date}
            className={`text-center py-1.5 rounded-full text-sm ${day.isActive ? 'bg-blue-500 text-white' : ''}`}
          >
            {day.date}
          </div>
        ))}
      </div>
    </>
  );
}