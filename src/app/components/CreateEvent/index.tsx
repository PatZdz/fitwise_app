'use client'

import { useState } from 'react';
import { FormData } from '../CreateEvent/types';
import { colorMap } from '../CreateEvent/constants';
import { useEventForm } from '../CreateEvent/hooks/useEventForm';
import EventNameField from './components/EventNameField';
import EventTypeAndColor from '../CreateEvent/components/EventTypeAndColor';
import DateTimeSelection from '../CreateEvent/components/DateTimeSelection';
import FrequencyField from '../CreateEvent/components/FrequencyField';
import EmployeeField from '../CreateEvent/components/EmployeeField';
import ClientsField from '../CreateEvent/components/ClientsField';
import ActionButtons from '../CreateEvent/components/ActionButtons';

export default function CreateEvent() {
  const {
    formData,
    handleInputChange,
    handleClear,
    handleSubmit,
    addClient,
    removeClient,
    handleKeyPress,
    setFormData  // Added missing setFormData
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

        <DateTimeSelection
          date={formData.date}
          timeStart={formData.timeStart}
          timeEnd={formData.timeEnd}
          onChange={handleInputChange}
          setFormData={setFormData}  
        />

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