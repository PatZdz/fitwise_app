'use client'

import { useState } from'react';

interface CalendarClass {
  type: 'POMOC' | 'DZIŚ';
  time: string;
  title: string;
  trainer: string;
  participants: number;
}

interface DayProps {
  date: number;
  isActive?: boolean;
  classes?: CalendarClass[];
}

export default function Calendar() {
  const classes: CalendarClass[] = [
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

  const days: DayProps[] = [
    { date: 23 },
    { date: 24 },
    { date: 25 },
    { date: 26 },
    { date: 27, isActive: true },
    { date: 28 },
    { date: 29 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">Październik 2025</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {['PON', 'WTO', 'ŚRO', 'CZW', 'PIĄ', 'SOB', 'NIE'].map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-6">
        {days.map((day) => (
          <div
            key={day.date}
            className={`text-center py-2 rounded-full ${day.isActive ? 'bg-blue-500 text-white' : ''}`}
          >
            {day.date}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {classes.map((classItem, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded bg-gray-50 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">{classItem.time}</div>
              <div>
                <div className="text-sm font-medium">{classItem.title}</div>
                <div className="text-xs text-gray-500">{classItem.trainer}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Uczestnicy:</span>
              <span className="text-sm font-medium">{classItem.participants}</span>
              <button className="p-1 hover:bg-gray-200 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}