'use client'

import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import { format, addHours } from 'date-fns';
import { pl } from 'date-fns/locale';
import Attendance from '../Attendance';

interface ClassItem {
  type: string;
  time: string;
  title: string;
  trainer: string;
  participants: Array<{
    name: string;
    isPresent: boolean;
    avatar?: string;
  }>;
}

export default function Calendar() {
  const [currentDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const classes = [
    {
      type: 'POMOC',
      time: '8:00',
      title: 'Crossfit',
      trainer: 'Jan Paterski',
      participants: [
        { name: "Adam Nowak", isPresent: false },
        { name: "Michał Temeryn", isPresent: false },
        { name: "Grzegorz Rataj", isPresent: false },
        { name: "Sławomir Kowalski", isPresent: false }
      ]
    },
    {
      type: 'POMOC',
      time: '9:00',
      title: 'Zumba',
      trainer: 'Iza Golińska',
      participants: [
        { name: "Joanna Bigdaj", isPresent: false },
        { name: "Anna Kowalska", isPresent: false },
        { name: "Maria Nowak", isPresent: false }
      ]
    },
    {
      type: 'DZIŚ',
      time: '10:00',
      title: 'Trening personalny',
      trainer: 'Krzysztof Kolin',
      participants: [
        { name: "Jan Ślusarz", isPresent: false }
      ]
    },
    {
      type: 'DZIŚ',
      time: '14:00',
      title: 'Trening siłowy',
      trainer: 'Andrzej Pęk',
      participants: [
        { name: "Patryk Zdołowski", isPresent: false },
        { name: "Gabriel Granewski", isPresent: false },
        { name: "Daniel Krosno", isPresent: false }
      ]
    }
  ];

  const activeHours = [...new Set(classes.map(classItem => 
    parseInt(classItem.time.split(':')[0])
  ))].sort((a, b) => a - b);

  const getClassesForHour = (hour: number) => {
    const hourStr = `${hour}:00`;
    return classes.filter(classItem => classItem.time === hourStr);
  };

  const handleClassClick = (classItem: ClassItem) => {
    const classDate = new Date(currentDate);
    const [hours] = classItem.time.split(':').map(Number);
    classDate.setHours(hours, 0, 0, 0);

    setSelectedClass({
      ...classItem,
      time: `${classItem.time} - ${format(addHours(classDate, 1), 'HH:mm')}`
    });
  };

  const handleUpdateParticipants = (updatedParticipants: typeof classes[0]['participants']) => {
    if (selectedClass) {
      setSelectedClass({
        ...selectedClass,
        participants: updatedParticipants
      });
    }
  };

  const handleUpdateDateTime = (date: Date, time: string) => {
    if (selectedClass) {
      setSelectedClass({
        ...selectedClass,
        time
      });
    }
  };

  const handleDeleteEvent = () => {
    setSelectedClass(null);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 pb-7">
        <CalendarHeader 
          title={format(currentDate, "EEEE, d MMMM yyyy", { locale: pl })}
          onPrevious={() => {}}
          onNext={() => {}}
        />
        <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] mt-4 auto-rows-[80px] sm:auto-rows-[72px]">
          {activeHours.map((hour) => (
            <div key={hour} className="contents">
              <div className="border-r border-b p-1 sm:p-2 text-sm sm:text-sm text-gray-500 bg-gray-50 flex items-center justify-center">
                {`${hour}:00`}
              </div>
              <div className="border-b p-1 sm:p-2 relative">
                {getClassesForHour(hour).map((classItem, index) => (
                  <div
                    key={index}
                    onClick={() => handleClassClick(classItem)}
                    className="absolute inset-x-1 inset-y-1 p-2 sm:p-2 rounded bg-blue-50 hover:bg-blue-100 transition-colors overflow-hidden cursor-pointer"
                  >
                    <div className="flex justify-between items-start gap-2 sm:gap-4 h-full">
                      <div className="min-w-0 flex-1">
                        <div className="text-base font-medium truncate">{classItem.title}</div>
                        <div className="text-sm text-gray-600 truncate">{classItem.trainer}</div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                        <span className="text-xs sm:text-sm text-gray-500">Uczestnicy:</span>
                        <span className="text-base font-medium">{classItem.participants.length}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {classes.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center col-span-2">
              <p className="text-gray-500 text-lg">Brak zajęć w tym dniu</p>
            </div>
          )}
        </div>
      </div>

      {selectedClass && (
        <Attendance
          isOpen={!!selectedClass}
          onClose={() => setSelectedClass(null)}
          classData={{
            title: selectedClass.title,
            time: selectedClass.time,
            date: currentDate,
            trainer: selectedClass.trainer,
            participants: selectedClass.participants
          }}
          onUpdateParticipants={handleUpdateParticipants}
          onDeleteEvent={handleDeleteEvent}
          onUpdateDateTime={handleUpdateDateTime}
        />
      )}
    </>
  );
}