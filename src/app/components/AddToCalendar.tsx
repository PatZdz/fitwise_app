'use client'

import { useState } from 'react';

export default function AddToCalendar() {
  const [formData, setFormData] = useState({
    name: 'Trening personalny',
    type: 'Indywidualne',
    color: 'Zielony',
    date: 'Poniedziałek, 15 Paź. 2024',
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
      date: '',
      timeStart: '',
      timeEnd: '',
      frequency: 'Nie powtarza się',
      employee: '',
      clients: [],
      searchClient: ''
    });
  };

  const handleSubmit = () => {
    // Tutaj dodaj logikę zapisywania danych
    console.log('Zapisano:', formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Stwórz zajęcia</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Nazwa zajęcia</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Rodzaj zajęcia</label>
          <div className="relative">
            <select 
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full p-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Data</label>
            <div className="relative">
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Od</label>
            <div className="relative">
              <select 
                name="timeStart"
                value={formData.timeStart}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>14:00</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Do</label>
            <div className="relative">
              <select 
                name="timeEnd"
                value={formData.timeEnd}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>15:30</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Cykliczność</label>
          <div className="relative">
            <select 
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <label className="block text-sm text-gray-600 mb-1">Pracownik</label>
          <div className="relative">
            <select 
              name="employee"
              value={formData.employee}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <div className="flex gap-2 mb-2">
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
              placeholder="Wyszukaj klienta..."
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            onClick={handleClear}
            className="flex-1 px-4 py-2 border border-gray-200 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Wyczyść
          </button>
          <button 
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Stwórz
          </button>
        </div>
      </div>
    </div>
  );
}