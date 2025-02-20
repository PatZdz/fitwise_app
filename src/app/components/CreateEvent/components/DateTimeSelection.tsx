import DatePicker from 'react-datepicker';
import { pl } from 'date-fns/locale';
import { InputChangeEvent } from '../types';
import { icons } from '../constants';
import 'react-datepicker/dist/react-datepicker.css';

// Update the interface
import { FormData } from '../types';  // Dodaj ten import

interface DateTimeSelectionProps {
  date: Date;
  timeStart: string;
  timeEnd: string;
  onChange: (e: InputChangeEvent) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;  // Teraz używa właściwego typu
}

export default function DateTimeSelection({ 
  date, 
  timeStart, 
  timeEnd, 
  onChange, 
  setFormData 
}: DateTimeSelectionProps) {
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(timeString);
      }
    }
    return options;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const TimeSelect = ({ name, value }: { name: string; value: string }) => (
    <div>
      <label className="block text-sm text-gray-600 mb-0.5">{name === 'timeStart' ? 'Od' : 'Do'}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icons.time}
        </div>
        <select 
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-9 pl-9 pr-8 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <optgroup label="Rano (6:00 - 12:00)">
            {generateTimeOptions()
              .filter(time => {
                const hour = parseInt(time.split(':')[0]);
                return hour >= 6 && hour < 12;
              })
              .map(time => (
                <option key={time} value={time}>{time}</option>
              ))
            }
          </optgroup>
          <optgroup label="Popołudnie (12:00 - 17:00)">
            {generateTimeOptions()
              .filter(time => {
                const hour = parseInt(time.split(':')[0]);
                return hour >= 12 && hour < 17;
              })
              .map(time => (
                <option key={time} value={time}>{time}</option>
              ))
            }
          </optgroup>
          <optgroup label="Wieczór (17:00 - 22:00)">
            {generateTimeOptions()
              .filter(time => {
                const hour = parseInt(time.split(':')[0]);
                return hour >= 17 && hour < 22;
              })
              .map(time => (
                <option key={time} value={time}>{time}</option>
              ))
            }
          </optgroup>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="block text-sm text-gray-600 mb-0.5">Data</label>
        <div className="relative w-full z-10">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none z-20">
            {icons.calendar}
          </div>
          <DatePicker
            selected={date}
            onChange={(date: Date | null) => date && setFormData(prev => ({ ...prev, date }))}
            dateFormat="EEEE, d MMM yyyy"
            locale={pl}
            customInput={
              <input
                type="text"
                value={formatDate(date)}
                readOnly
                className="w-full h-9 pl-9 pr-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white"
              />
            }
            wrapperClassName="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <TimeSelect name="timeStart" value={timeStart} />
        <TimeSelect name="timeEnd" value={timeEnd} />
      </div>
    </div>
  );
}