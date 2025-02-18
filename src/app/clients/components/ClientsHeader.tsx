'use client';

interface ClientsHeaderProps {
  onAddClient: () => void;
  onClearFilters: () => void;
}

export default function ClientsHeader({ onAddClient, onClearFilters }: ClientsHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Klienci</h1>
        <p className="text-gray-600">Lista wszystkich klientów. Wyświetlaj, dodawaj, edytuj i usuwaj klientów.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">
        <select className="w-full md:w-64 p-3 md:p-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Wszyscy użytkownicy</option>
        </select>
        
        <input 
          type="search" 
          placeholder="Szukaj" 
          className="w-full md:w-64 p-3 md:p-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="md:flex-1"></div>
        
        <div className="flex gap-3 md:gap-4">
          <button 
            onClick={onAddClient}
            className="flex-1 md:flex-none bg-blue-500 text-white p-3 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors text-base font-medium"
          >
            Dodaj klienta
          </button>
          
          <button 
            onClick={onClearFilters}
            className="flex-1 md:flex-none text-blue-500 p-3 md:px-4 md:py-2 rounded-lg border border-blue-500 hover:bg-blue-50 transition-colors text-base font-medium"
          >
            Wyczyść filtry
          </button>
        </div>
      </div>
    </div>
  );
}