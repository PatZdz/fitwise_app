import { InputChangeEvent } from '../types';
import { icons } from '../constants';

interface EmployeeFieldProps {
  value: string;
  onChange: (e: InputChangeEvent) => void;
}

export default function EmployeeField({ value, onChange }: EmployeeFieldProps) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-0.5">Pracownik</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icons.employee}
        </div>
        <select 
          name="employee"
          value={value}
          onChange={onChange}
          className="w-full h-9 pl-9 pr-8 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option>Jan Trenerowski</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}