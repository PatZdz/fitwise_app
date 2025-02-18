'use client';

import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { pl } from 'date-fns/locale';
import AddEventModal from './AddEventModal';
import { Event } from '../types/Event';

interface MonthlyViewProps {
  currentDate: Date;
}

const MonthlyView: React.FC<MonthlyViewProps> = ({ currentDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekDays = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'];

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleAddEvent = (eventData: any) => {
    if (selectedDate) {
      const newEvent: Event = {
        id: Math.random().toString(),
        title: eventData.title,
        type: eventData.type,
        start: new Date(selectedDate.setHours(parseInt(eventData.startTime.split(':')[0]))),
        end: new Date(selectedDate.setHours(parseInt(eventData.endTime.split(':')[0]))),
        color: eventData.color,
        employeeId: eventData.employee,
        clientIds: [],
        recurring: {
          frequency: eventData.recurring,
        },
      };
      setEvents([...events, newEvent]);
    }
  };

  const getEventsForDay = (date: Date) => {
    return events.filter(event => 
      format(event.start, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* Week days header */}
      <div className="grid grid-cols-7 bg-gray-50">
        {weekDays.map((day) => (
          <div key={day} className="p-2 sm:p-4 text-center border-b border-r last:border-r-0">
            <span className="text-xs sm:text-sm font-medium text-gray-600">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {daysInMonth.map((date, idx) => (
          <div
            key={idx}
            onClick={() => handleDayClick(date)}
            className={`min-h-[80px] sm:min-h-[120px] p-2 border-b border-r last:border-r-0 cursor-pointer hover:bg-gray-50 
              ${!isSameMonth(date, currentDate) ? 'bg-gray-50' : ''} 
              ${isToday(date) ? 'bg-blue-50' : ''}`}
          >
            <span
              className={`inline-block w-6 h-6 sm:w-8 sm:h-8 text-center leading-6 sm:leading-8 rounded-full text-sm sm:text-base
                ${isToday(date) ? 'bg-blue-500 text-white' : ''}`}
            >
              {format(date, 'd')}
            </span>

            {/* Events for the day */}
            <div className="mt-1 space-y-1">
              {getEventsForDay(date).map((event) => (
                <div
                  key={event.id}
                  className={`text-[10px] sm:text-xs p-1 rounded truncate ${
                    event.color === 'green' ? 'bg-green-100 text-green-800' :
                    event.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    event.color === 'red' ? 'bg-red-100 text-red-800' :
                    event.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}
                >
                  {format(event.start, 'HH:mm')} - {event.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedDate && (
        <AddEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedDate={selectedDate}
          onSubmit={handleAddEvent}
        />
      )}
    </div>
  );
};

export default MonthlyView;