'use client'

import { useState } from 'react';
import { FormData } from './types';
import { colorMap } from './constants';
import { useEventForm } from './hooks/useEventForm';
import EventNameField from './components/EventNameField';
import EventTypeAndColor from './components/EventTypeAndColor';
import FrequencyField from './components/FrequencyField';
import EmployeeField from './components/EmployeeField';
import ClientsField from './components/ClientsField';
import ActionButtons from './components/ActionButtons';
import DateSelection from './components/Date';
import TimeSelection from './components/Time';
// Remove the DateTimeSelection import

export default function CreateEvent() {
  const {
    formData,
    handleInputChange,
    handleClear,
    handleSubmit,
    addClient,
    removeClient,
    handleKeyPress,
    setFormData
  } = useEventForm();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-3">Stwórz zajęcia</h2>
      
      <div className="space-y-2">
        <EventNameField 
          value={formData.name}
          onChange={handleInputChange}
        />

        <EventTypeAndColor
          type={formData.type}
          color={formData.color}
          onChange={handleInputChange}
          colorMap={colorMap}
        />

        <div className="flex flex-col sm:flex-row sm:gap-2 gap-4 w-full">
          <DateSelection date={formData.date} setFormData={setFormData} />
          <TimeSelection 
            timeStart={formData.timeStart} 
            timeEnd={formData.timeEnd} 
            onChange={handleInputChange}
          />
        </div>

        <FrequencyField
          value={formData.frequency}
          onChange={handleInputChange}
        />

        <EmployeeField
          value={formData.employee}
          onChange={handleInputChange}
        />

        <ClientsField
          clients={formData.clients}
          searchClient={formData.searchClient}
          onRemove={removeClient}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onAdd={addClient}
        />

        <ActionButtons
          onClear={handleClear}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}