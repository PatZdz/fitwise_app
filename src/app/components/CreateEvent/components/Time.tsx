import React, { useState, useEffect, useRef } from 'react';
import { InputChangeEvent } from '../types';
import { icons } from '../constants';

interface TimeInputProps {
  name: string;
  value: string;
  timeStart: string;
  onChange: (e: InputChangeEvent) => void;
}

interface TimeSelectionProps {
  timeStart: string;
  timeEnd: string;
  onChange: (e: InputChangeEvent) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ name, value, timeStart, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const timeOptions = Array.from({ length: 32 }, (_, i) => {
    const hour = Math.floor(i / 2) + 6;
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour.toString().padStart(2, '0')}:${minute}`;
  });

  const handleTimeChange = (value: string) => {
    setInputValue(value);

    const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timeRegex.test(value)) return;

    const [hours] = value.split(':').map(Number);
    if (hours < 6 || hours >= 22) return;

    if (name === 'timeEnd' && value <= timeStart) {
      alert('Czas zakończenia musi być późniejszy niż czas rozpoczęcia');
      return;
    }

    onChange({ target: { name, value } } as InputChangeEvent);
  };

  const handleTimeSelect = (value: string) => {
    handleTimeChange(value);
    setShowPicker(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm text-gray-600 mb-0.5">{name === 'timeStart' ? 'Od' : 'Do'}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icons.time}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleTimeChange(e.target.value)}
          onFocus={() => setShowPicker(true)}
          placeholder="HH:mm"
          maxLength={5}
          className="w-full h-9 pl-9 pr-8 border border-gray-200 rounded bg-white focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className="absolute inset-y-0 right-0 px-2 flex items-center"
        >
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showPicker && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
            {timeOptions.map(time => (
              <div
                key={time}
                className={`px-3 py-1.5 hover:bg-blue-50 cursor-pointer ${
                  name === 'timeEnd' && time <= timeStart ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function TimeSelection({ timeStart, timeEnd, onChange }: TimeSelectionProps) {
  return (
    <div className="flex-1 min-w-0 flex gap-4">
      <TimeInput name="timeStart" value={timeStart} timeStart={timeStart} onChange={onChange} />
      <TimeInput name="timeEnd" value={timeEnd} timeStart={timeStart} onChange={onChange} />
    </div>
  );
}