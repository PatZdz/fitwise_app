'use client';

import React, { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { pl } from 'date-fns/locale';
import AddEventModal from './AddEventModal';
import { Event } from '../types/Event';

interface WeeklyViewProps {
  currentDate: Date;
}

const WeeklyView: React.FC<WeeklyViewProps> = ({ currentDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const timeSlots = Array.from({ length: 16 }, (_, i) => i + 6); // 6 AM to 9 PM
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  const handleTimeSlotClick = (date: Date, hour: number) => {
    const selectedDateTime = new Date(date);
    selectedDateTime.setHours(hour);
    setSelectedDate(selectedDateTime);
    setSelectedHour(hour);
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

  const getEventsForSlot = (date: Date, hour: number) => {
    return events.filter(event => {
      const eventDate = format(event.start, 'yyyy-MM-dd');
      const slotDate = format(date, 'yyyy-MM-dd');
      const eventHour = event.start.getHours();
      return eventDate === slotDate && eventHour === hour;
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* Header row with dates */}
      <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b min-w-[800px]">
        <div className="p-2 border-r bg-gray-50"></div>
        {weekDays.map((date, index) => (
          <div
            key={index}
            className={`p-2 text-center border-r last:border-r-0 ${
              format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') ? 'bg-blue-50' : 'bg-gray-50'
            }`}
          >
            <div className="text-xs sm:text-sm text-gray-600">
              {format(date, 'EEE', { locale: pl })}
            </div>
            <div className="font-semibold text-sm sm:text-base">
              {format(date, 'd')}
            </div>
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-[80px_repeat(7,1fr)] min-w-[800px]">
        {timeSlots.map((hour) => (
          <React.Fragment key={hour}>
            <div className="border-r border-b p-2 text-xs sm:text-sm text-gray-600 bg-gray-50">
              {`${hour}:00`}
            </div>
            {weekDays.map((date, index) => (
              <div
                key={index}
                onClick={() => handleTimeSlotClick(date, hour)}
                className="border-r border-b last:border-r-0 p-2 min-h-[60px] hover:bg-gray-50 cursor-pointer relative"
              >
                {getEventsForSlot(date, hour).map((event) => (
                  <div
                    key={event.id}
                    className={`absolute inset-x-1 p-1 rounded text-[10px] sm:text-xs ${
                      event.color === 'green' ? 'bg-green-100 text-green-800' :
                      event.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      event.color === 'red' ? 'bg-red-100 text-red-800' :
                      event.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeeklyView;