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
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => date && setFormData(prev => ({ ...prev, date }))}
          dateFormat="EEEE, d MMM yyyy"
          locale={pl}
          className="w-full h-9 pl-9 pr-8 border border-gray-200 rounded bg-white focus:ring-2 focus:ring-blue-500 !block"
          wrapperClassName="w-full block"
        />
      </div>
    </div>
  );
}