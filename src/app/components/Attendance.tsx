'use client'

import { useState } from 'react';

interface AttendanceProps {
  title: string;
  time: string;
  trainer: string;
  participants: Array<{
    name: string;
    isPresent: boolean;
  }>;
}

export default function Attendance() {
  const currentClass: AttendanceProps = {
    title: "Trening personalny",
    time: "10:00 - 12:00 (43min.)",
    trainer: "Jan Trenerowski",
    participants: [
      { name: "Adam Nowak", isPresent: true },
      { name: "Michał Temeryn", isPresent: false },
      { name: "Grzegorz Rataj", isPresent: false },
      { name: "Sławomir Kowalski", isPresent: false },
      { name: "Joanna Bigdaj", isPresent: true },
      { name: "Jan Nowak", isPresent: false },
      { name: "Agnieszka Chylak", isPresent: false },
      { name: "Daniel Krosno", isPresent: true },
      { name: "Patryk Zdołowski", isPresent: true },
      { name: "Aniela Bogusz", isPresent: true },
      { name: "Lucja Maciejewska", isPresent: false },
      { name: "Gabriel Granewski", isPresent: true },
      { name: "Rafał Zdobski", isPresent: false },
      { name: "Katarzyna Rumił", isPresent: false }
    ]
  };

  const [participants, setParticipants] = useState(currentClass.participants);

  const handleAttendanceChange = (index: number) => {
    setParticipants(prev => prev.map((participant, i) => 
      i === index ? { ...participant, isPresent: !participant.isPresent } : participant
    ));
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h1 className="text-lg font-semibold mb-4">Aktualne zajęcia</h1>
      
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h2 className="text-lg font-semibold mb-2 sm:mb-0">{currentClass.title}</h2>
          <div className="text-base">
            <span className="font-semibold">10:00 - 12:00</span>
            <span className="text-gray-500 ml-2">(43min.)</span>
          </div>
        </div>
        <div className="text-blue-600 mb-4 sm:mb-6">{currentClass.trainer}</div>
        
        <div className="mb-2">
          <span className="text-base font-semibold">14 uczestników</span>
        </div>
        <div className="text-sm text-gray-500 mb-4 sm:mb-6">
          Proszę odznaczać obecność uczestników na aktualnych zajęciach.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {participants.map((participant, index) => (
          <div
            key={index}
            onClick={() => handleAttendanceChange(index)}
            className={`
              flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all
              ${participant.isPresent 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <div className={`
              flex items-center justify-center w-5 h-5 rounded border
              ${participant.isPresent 
                ? 'border-white' 
                : 'border-gray-300'
              }
            `}>
              {participant.isPresent && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className="text-sm">{participant.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}