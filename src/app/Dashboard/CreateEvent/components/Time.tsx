'use client'

import { useState } from 'react';
import { icons } from '../constants';

const TimeInput = ({ name }: { name: string }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const timeOptions = Array.from({ length: 32 }, (_, i) => {
    const hour = Math.floor(i / 2) + 6;
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour.toString().padStart(2, '0')}:${minute}`;
  });

  const handleTimeSelect = (time: string) => {
    setInputValue(time);
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
          onChange={(e) => setInputValue(e.target.value)}
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
                className="px-3 py-1.5 hover:bg-blue-50 cursor-pointer"
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

export default function TimeSelection() {
  return (
    <div className="flex-1 min-w-0 flex gap-2">
      <TimeInput name="timeStart" />
      <TimeInput name="timeEnd" />
    </div>
  );
}