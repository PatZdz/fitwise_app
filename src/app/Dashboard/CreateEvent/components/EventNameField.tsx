'use client'

import { icons } from '../constants';

export default function EventNameField() {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-0.5">Nazwa zajęcia</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icons.name}
        </div>
        <input
          type="text"
          name="name"
          placeholder="Wprowadź nazwę zajęcia"
          className="w-full h-9 pl-9 pr-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}