'use client'

import { useState } from 'react';
import { icons } from '../constants';

export default function ClientsField() {
  const [clients, setClients] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const handleAddClient = () => {
    if (searchValue.trim()) {
      setClients([...clients, searchValue.trim()]);
      setSearchValue('');
    }
  };

  const handleRemoveClient = (index: number) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-0.5">Klienci</label>
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            {icons.clients}
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddClient()}
            placeholder="Dodaj klienta"
            className="w-full h-9 pl-9 pr-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={handleAddClient}
            className="absolute inset-y-0 right-0 px-2 flex items-center"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <div className="space-y-1">
          {clients.map((client, index) => (
            <div key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded mr-2 mb-2">
              <span className="text-sm">{client}</span>
              <button
                type="button"
                onClick={() => handleRemoveClient(index)}
                className="p-0.5 hover:bg-blue-200 rounded-full"
              >
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}