'use client'

import { useState } from 'react';
import { icons } from '../constants';

export default function EventTypeAndColor() {
  const [selectedColor, setSelectedColor] = useState('bg-green-600');

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Rodzaj zajęcia</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            {icons.document}
          </div>
          <select 
            name="type"
            className="w-full h-9 pl-9 pr-8 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Indywidualne</option>
            <option>Grupowe</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Kolor zajęcia</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className={`w-3 h-3 rounded-full ${selectedColor}`}></div>
          </div>
          <select 
            name="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full h-9 pl-8 pr-8 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="bg-green-600">Zielony</option>
            <option value="bg-blue-600">Niebieski</option>
            <option value="bg-red-600">Czerwony</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}