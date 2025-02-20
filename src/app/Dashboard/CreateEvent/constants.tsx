import { 
  PencilIcon, 
  DocumentIcon, 
  SwatchIcon, 
  ClockIcon, 
  ArrowPathIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline';

export const colorMap = {
  Zielony: 'bg-green-600',
  Niebieski: 'bg-blue-600',
  Czerwony: 'bg-red-600'
};

export const icons = {
  name: <PencilIcon className="w-5 h-5 text-gray-400" />,
  document: <DocumentIcon className="w-5 h-5 text-gray-400" />,
  color: <SwatchIcon className="w-5 h-5 text-gray-400" />,
  time: <ClockIcon className="w-5 h-5 text-gray-400" />,
  repeat: <ArrowPathIcon className="w-5 h-5 text-gray-400" />,
  employee: <BriefcaseIcon className="w-5 h-5 text-gray-400" />,
  calendar: <CalendarIcon className="w-5 h-5 text-gray-400" />,
  clients: <UsersIcon className="w-5 h-5 text-gray-400" />
};