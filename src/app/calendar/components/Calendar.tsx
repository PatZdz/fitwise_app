'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import WeeklyView from './WeeklyView';
import MonthlyView from './MonthlyView';
import DailyView from './DailyView';

type ViewType = 'monthly' | 'weekly' | 'daily';

const Calendar: React.FC = () => {
  const [view, setView] = useState<ViewType>('weekly');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (view === 'daily') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (view === 'weekly') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === 'daily') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (view === 'weekly') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="p-2 sm:p-4">
      <nav className="bg-white shadow-sm mb-4 p-3 sm:p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
          <div className="flex items-center justify-between sm:justify-start">
            <h1 className="text-xl sm:text-2xl font-semibold">Kalendarz</h1>
            
            {/* View Selection - Mobile */}
            <div className="sm:hidden">
              <select
                value={view}
                onChange={(e) => setView(e.target.value as ViewType)}
                className="bg-gray-100 rounded-lg px-3 py-1.5 text-sm font-medium"
              >
                <option value="daily">Dzienny</option>
                <option value="weekly">Tygodniowy</option>
                <option value="monthly">Miesięczny</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:ml-auto gap-4">
            {/* Calendar Navigation */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={handlePrevious}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleToday}
                  className="px-3 py-1.5 text-sm font-medium hover:bg-white rounded-lg transition-colors"
                >
                  Dzisiaj
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <span className="text-base sm:text-lg font-medium">
                {view === 'daily' ? (
                  format(currentDate, "d MMMM yyyy", { locale: pl })
                ) : view === 'weekly' ? (
                  format(currentDate, "d MMM - d MMM yyyy", { locale: pl })
                ) : (
                  format(currentDate, 'MMMM yyyy', { locale: pl })
                )}
              </span>
            </div>

            {/* View Selection - Desktop */}
            <div className="hidden sm:flex gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('daily')}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  view === 'daily' ? 'bg-white shadow-sm' : 'hover:bg-white'
                }`}
              >
                Dzienny
              </button>
              <button
                onClick={() => setView('weekly')}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  view === 'weekly' ? 'bg-white shadow-sm' : 'hover:bg-white'
                }`}
              >
                Tygodniowy
              </button>
              <button
                onClick={() => setView('monthly')}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  view === 'monthly' ? 'bg-white shadow-sm' : 'hover:bg-white'
                }`}
              >
                Miesięczny
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Calendar View Components */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        {view === 'daily' ? (
          <DailyView currentDate={currentDate} />
        ) : view === 'weekly' ? (
          <WeeklyView currentDate={currentDate} />
        ) : (
          <MonthlyView currentDate={currentDate} />
        )}
      </div>
    </div>
  );
};

export default Calendar;