'use client'

import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import { CalendarClass as ICalendarClass } from './types/types';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export default function Calendar() {
  const [currentDate] = useState(new Date());

  const classes: ICalendarClass[] = [
    {
      type: 'POMOC',
      time: '8:00',
      title: 'Crossfit',
      trainer: 'Jan Paterski',
      participants: 11
    },
    {
      type: 'POMOC',
      time: '9:00',
      title: 'Zumba',
      trainer: 'Iza Golińska',
      participants: 14
    },
    {
      type: 'DZIŚ',
      time: '10:00',
      title: 'Trening personalny',
      trainer: 'Krzysztof Kolin',
      participants: 1
    },
    {
      type: 'DZIŚ',
      time: '12:00',
      title: 'Trening siłowy',
      trainer: 'Iza Golińska',
      participants: 4
    },
    {
      type: 'DZIŚ',
      time: '13:00',
      title: 'Trening kardio',
      trainer: 'Jan Paterski',
      participants: 8
    },
    {
      type: 'DZIŚ',
      time: '17:00',
      title: 'Trening dla początkujących',
      trainer: 'Jan Paterski',
      participants: 20
    }
  ];

  // Generowanie tablicy godzin tylko dla istniejących zajęć
  const timeSlots = Array.from(
    new Set(classes.map(classItem => parseInt(classItem.time.split(':')[0])))
  ).sort((a, b) => a - b);

  const handlePrevious = () => {
    // Implementacja zmiany dnia wstecz
  };

  const handleNext = () => {
    // Implementacja zmiany dnia do przodu
  };

  const getClassesForHour = (hour: number) => {
    const hourStr = `${hour}:00`;
    return classes.filter(classItem => classItem.time === hourStr);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <CalendarHeader 
        title={format(currentDate, "EEEE, d MMMM yyyy", { locale: pl })}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <div className="grid grid-cols-[80px_1fr] mt-4">
        {timeSlots.map((hour) => (
          <div key={hour} className="contents">
            <div className="border-r border-b p-2 text-sm text-gray-500 bg-gray-50">
              {`${hour}:00`}
            </div>
            <div className="border-b p-2 min-h-[80px] relative">
              {getClassesForHour(hour).map((classItem, index) => (
                <div
                  key={index}
                  className="absolute inset-x-1 p-2 rounded bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="text-base font-medium">{classItem.title}</div>
                      <div className="text-sm text-gray-600">{classItem.trainer}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Uczestnicy:</span>
                      <span className="text-base font-medium">{classItem.participants}</span>
                      <button className="p-1 hover:bg-blue-200 rounded-full">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}