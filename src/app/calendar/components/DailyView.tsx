'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import AddEventModal from './AddEventModal';
import { Event } from '../types/Event';

interface DailyViewProps {
  currentDate: Date;
}

const DailyView: React.FC<DailyViewProps> = ({ currentDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const timeSlots = Array.from({ length: 16 }, (_, i) => i + 6); // 6 AM to 9 PM

  const handleTimeSlotClick = (hour: number) => {
    const selectedDateTime = new Date(currentDate);
    selectedDateTime.setHours(hour);
    setSelectedHour(hour);
    setIsModalOpen(true);
  };

  const handleAddEvent = (eventData: any) => {
    if (selectedHour !== null) {
      const newEvent: Event = {
        id: Math.random().toString(),
        title: eventData.title,
        type: eventData.type,
        start: new Date(currentDate.setHours(parseInt(eventData.startTime.split(':')[0]))),
        end: new Date(currentDate.setHours(parseInt(eventData.endTime.split(':')[0]))),
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

  const getEventsForHour = (hour: number) => {
    return events.filter(event => {
      const eventDate = format(event.start, 'yyyy-MM-dd');
      const currentDateStr = format(currentDate, 'yyyy-MM-dd');
      const eventHour = event.start.getHours();
      return eventDate === currentDateStr && eventHour === hour;
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* Time slots */}
      <div className="grid grid-cols-[80px_1fr]">
        {timeSlots.map((hour) => (
          <React.Fragment key={hour}>
            <div className="border-r border-b p-2 text-xs sm:text-sm text-gray-600 bg-gray-50">
              {`${hour}:00`}
            </div>
            <div
              onClick={() => handleTimeSlotClick(hour)}
              className="border-b p-2 min-h-[60px] sm:min-h-[80px] hover:bg-gray-50 cursor-pointer transition-colors relative"
            >
              {getEventsForHour(hour).map((event) => (
                <div
                  key={event.id}
                  className={`absolute inset-x-1 p-2 rounded ${
                    event.color === 'green' ? 'bg-green-100 text-green-800' :
                    event.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    event.color === 'red' ? 'bg-red-100 text-red-800' :
                    event.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs">
                    {format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')}
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      {isModalOpen && (
        <AddEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedDate={currentDate}
          onSubmit={handleAddEvent}
        />
      )}
    </div>
  );
};

export default DailyView;