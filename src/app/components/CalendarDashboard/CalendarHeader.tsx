'use client'

interface CalendarHeaderProps {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
}

export default function CalendarHeader({ title, onPrevious, onNext }: CalendarHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={onPrevious} className="p-1.5 hover:bg-gray-100 rounded-full">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h2 className="text-base font-semibold">{title}</h2>
      <button onClick={onNext} className="p-1.5 hover:bg-gray-100 rounded-full">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}