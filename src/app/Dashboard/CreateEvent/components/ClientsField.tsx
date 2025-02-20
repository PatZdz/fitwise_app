import { InputChangeEvent, KeyPressEvent } from '../types';
import { icons } from '../constants';

interface ClientsFieldProps {
  clients: string[];
  searchClient: string;
  onRemove: (client: string) => void;
  onChange: (e: InputChangeEvent) => void;
  onKeyPress: (e: KeyPressEvent) => void;
  onAdd: (client: string) => void;
}

export default function ClientsField({ 
  clients, 
  searchClient, 
  onRemove, 
  onChange, 
  onKeyPress, 
  onAdd 
}: ClientsFieldProps) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">Klienci</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {clients.map((client) => (
          <div key={client} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            {client}
            <button 
              onClick={() => onRemove(client)}
              className="text-blue-600 hover:text-blue-800"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icons.clients}
        </div>
        <input
          type="text"
          name="searchClient"
          value={searchClient}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Wyszukaj klienta..."
          className="w-full h-9 pl-9 pr-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchClient && (
          <button
            onClick={() => onAdd(searchClient)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600"
          >
            Dodaj
          </button>
        )}
      </div>
    </div>
  );
}