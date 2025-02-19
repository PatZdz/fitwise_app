'use client'

interface CalendarClassProps {
  time: string;
  title: string;
  trainer: string;
  participants: number;
}

export default function CalendarClass({ time, title, trainer, participants }: CalendarClassProps) {
  return (
    <div className="flex items-center justify-between h-9 px-2 rounded bg-gray-50 hover:bg-gray-100">
      <div className="flex items-center gap-2">
        <div className="text-xs text-gray-500 min-w-[40px]">{time}</div>
        <div>
          <div className="text-sm font-medium leading-tight">{title}</div>
          <div className="text-xs text-gray-500 leading-tight">{trainer}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Uczestnicy:</span>
        <span className="text-sm font-medium min-w-[20px] text-right">{participants}</span>
        <button className="p-0.5 hover:bg-gray-200 rounded-full">
          <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}