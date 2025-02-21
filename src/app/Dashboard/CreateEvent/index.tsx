'use client'

import EventNameField from './components/EventNameField';
import EventTypeAndColor from './components/EventTypeAndColor';
import DateSelection from './components/Date';
import TimeSelection from './components/Time';
import FrequencyField from './components/FrequencyField';
import EmployeeField from './components/EmployeeField';
import ClientsField from './components/ClientsField';
import ActionButtons from './components/ActionButtons';

export default function CreateEvent() {
  return (
    <form className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-3">Stwórz zajęcia</h2>
      
      <div className="space-y-2">
        <EventNameField />
        <EventTypeAndColor />
        <div className="flex flex-col sm:flex-row sm:gap-2 gap-4 w-full">
          <DateSelection />
          <TimeSelection />
        </div>
        <FrequencyField />
        <EmployeeField />
        <ClientsField />
        <ActionButtons />
      </div>
    </form>
  );
}