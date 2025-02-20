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
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-semibold">{currentClass.title}</h2>
          <div className="text-sm">
            <span className="font-semibold">10:00 - 12:00</span>
            <span className="text-gray-500 ml-2">(43min.)</span>
          </div>
        </div>
        <div className="text-blue-600 text-sm">{currentClass.trainer}</div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold">14 uczestników</span>
          <span className="text-xs text-gray-500">Proszę odznaczać obecność</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[400px] pr-1">
        {participants.map((participant, index) => (
          <div
            key={index}
            onClick={() => handleAttendanceChange(index)}
            className={`
              flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-all min-h-[36px]
              ${participant.isPresent 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <div className={`
              flex items-center justify-center w-4 h-4 rounded border
              ${participant.isPresent 
                ? 'border-white' 
                : 'border-gray-300'
              }
            `}>
              {participant.isPresent && (
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
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