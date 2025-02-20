import React from 'react';
import DatePicker from 'react-datepicker';
import { pl } from 'date-fns/locale';
import { FormData } from '../types';
import { icons } from '../constants';
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectionProps {
  date: Date;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function DateSelection({ date, setFormData }: DateSelectionProps) {
  return (
    <div className="flex-1 min-w-0 w-full">
      <label className="block text-sm text-gray-600 mb-0.5">Data</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none z-10">
          {icons.calendar}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none z-20">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => date && setFormData(prev => ({ ...prev, date }))}
          dateFormat="EEEE, d MMM yyyy"
          locale={pl}
          className="w-full h-9 pl-9 pr-8 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          wrapperClassName="w-full block"
        />
      </div>
    </div>
  );
}