'use client';

import { useState } from 'react';
import ClientsHeader from './ClientsHeader';
import ClientsList from './ClientsList';
import AddClientModal from './AddClientModal';

interface Client {
  id: string;
  initials: string;
  name: string;
  email: string;
  phone: string;
}

export default function ClientsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);

  const handleAddClient = () => {
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    // Clear filters logic here
  };

  const handleSubmitClient = (clientData: any) => {
    const newClient: Client = {
      id: Math.random().toString(),
      initials: `${clientData.firstName[0]}${clientData.lastName[0]}`,
      name: `${clientData.firstName} ${clientData.lastName}`,
      email: clientData.email,
      phone: clientData.phone,
    };
    setClients([...clients, newClient]);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 mt-[64px]">
      <div className="md:w-full max-w-xl md:max-w-none mx-auto">
        <ClientsHeader 
          onAddClient={handleAddClient} 
          onClearFilters={handleClearFilters}
        />
        <ClientsList clients={clients} />
        <AddClientModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitClient}
        />
      </div>
    </div>
  );
}