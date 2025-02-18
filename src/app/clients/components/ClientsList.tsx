'use client';

interface Client {
  id: string;
  initials: string;
  name: string;
  email: string;
  phone: string;
}

interface ClientsListProps {
  clients: Client[];
}

export default function ClientsList({ clients }: ClientsListProps) {
  return (
    <div className="mt-8">
      <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="col-span-6 text-sm font-medium text-gray-600">Imię i nazwisko</div>
          <div className="col-span-4 text-sm font-medium text-gray-600">Telefon</div>
          <div className="col-span-2 text-sm font-medium text-gray-600 text-right pr-2">Akcje</div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                  {client.initials}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{client.name}</div>
                  <div className="text-sm text-gray-500">{client.email}</div>
                </div>
              </div>
              <div className="col-span-4 flex items-center text-gray-700">{client.phone}</div>
              <div className="col-span-2 flex items-center justify-end">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {clients.map((client) => (
          <div 
            key={client.id}
            className="bg-white rounded-xl p-4 border border-gray-200"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium shrink-0">
                {client.initials}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{client.name}</div>
                <div className="text-gray-500">{client.email}</div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-gray-500">Telefon:</span>
              <span>{client.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}