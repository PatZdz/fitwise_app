'use client'

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { pl } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/datepicker.css';

interface FormData {
  name: string;
  type: string;
  color: string;
  date: Date;
  timeStart: string;
  timeEnd: string;
  frequency: string;
  employee: string;
  clients: string[];
  searchClient: string;
}

export default function AddToCalendar() {
  const [formData, setFormData] = useState<FormData>({
    name: 'Trening personalny',
    type: 'Indywidualne',
    color: 'Zielony',
    date: new Date(),  // Changed to Date object
    timeStart: '14:00',
    timeEnd: '15:30',
    frequency: 'Nie powtarza się',
    employee: 'Jan Trenerowski',
    clients: ['Adam Nowak', 'Rafał Sobielski'],
    searchClient: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const removeClient = (clientToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      clients: prev.clients.filter(client => client !== clientToRemove)
    }));
  };

  const handleClear = () => {
    setFormData({
      name: '',
      type: 'Indywidualne',
      color: 'Zielony',
      date: new Date(),  // Changed from empty string to new Date()
      timeStart: '',
      timeEnd: '',
      frequency: 'Nie powtarza się',
      employee: '',
      clients: [],
      searchClient: ''
    });
  };

  // Generate time options from 00:00 to 23:30 with 30-minute intervals
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

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      alert('Nazwa zajęcia jest wymagana');
      return false;
    }
    if (!formData.timeStart || !formData.timeEnd) {
      alert('Godziny zajęć są wymagane');
      return false;
    }
    if (!formData.employee) {
      alert('Pracownik jest wymagany');
      return false;
    }
    if (formData.clients.length === 0) {
      alert('Wybierz przynajmniej jednego klienta');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Zapisano:', formData);
      // Here you can add API call to save the data
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const addClient = (clientName: string) => {
    if (!clientName.trim()) return;
    
    if (!formData.clients.includes(clientName)) {
      setFormData(prev => ({
        ...prev,
        clients: [...prev.clients, clientName],
        searchClient: '' // Clear the input after adding
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addClient(formData.searchClient);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-3">Stwórz zajęcia</h2>
      
      <div className="space-y-2">
        <div>
          <label className="block text-sm text-gray-600 mb-0.5">Nazwa zajęcia</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-9 px-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Rodzaj zajęcia</label>
            <div className="relative">
              <select 
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full h-9 px-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <select 
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                className="w-full h-9 px-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Zielony</option>
                <option>Niebieski</option>
                <option>Czerwony</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm text-gray-600 mb-0.5">Data</label>
            <div className="relative w-full">
              <DatePicker
                selected={formData.date}
                onChange={(date: Date | null) => date && setFormData(prev => ({ ...prev, date }))}
                dateFormat="EEEE, d MMM yyyy"
                locale={pl}
                customInput={
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={formatDate(formData.date)}
                      readOnly
                      className="w-full h-9 px-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                }
                wrapperClassName="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm text-gray-600 mb-0.5">Od</label>
              <div className="relative">
                <select 
                  name="timeStart"
                  value={formData.timeStart}
                  onChange={handleInputChange}
                  className="w-full h-9 px-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Wybierz godzinę</option>
                  {generateTimeOptions().map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-0.5">Do</label>
              <div className="relative">
                <select 
                  name="timeEnd"
                  value={formData.timeEnd}
                  onChange={handleInputChange}
                  className="w-full h-9 px-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Wybierz godzinę</option>
                  {generateTimeOptions().map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-0.5">Cykliczność</label>
          <div className="relative">
            <select 
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
              className="w-full h-9 px-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Nie powtarza się</option>
              <option>Codziennie</option>
              <option>Co tydzień</option>
              <option>Co miesiąc</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-0.5">Pracownik</label>
          <div className="relative">
            <select 
              name="employee"
              value={formData.employee}
              onChange={handleInputChange}
              className="w-full h-9 px-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        <div>
          <label className="block text-sm text-gray-600 mb-1">Klienci</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.clients.map((client) => (
              <div key={client} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {client}
                <button 
                  onClick={() => removeClient(client)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              name="searchClient"
              value={formData.searchClient}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Wyszukaj klienta..."
              className="w-full h-9 px-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formData.searchClient && (
              <button
                onClick={() => addClient(formData.searchClient)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600"
              >
                Dodaj
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button 
            onClick={handleClear}
            className="flex-1 h-9 px-4 border border-gray-200 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Wyczyść
          </button>
          <button 
            onClick={handleSubmit}
            className="flex-1 h-9 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Stwórz
          </button>
        </div>
      </div>
    </div>
  );
}