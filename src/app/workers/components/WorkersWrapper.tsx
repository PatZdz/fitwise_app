'use client';

import { useState } from 'react';
import WorkersHeader from './WorkerHeader';
import WorkersList from './WorkersList';
import AddWorkerModal from './AddWorkerModal';

interface Worker {
  id: string;
  initials: string;
  name: string;
  email: string;
  phone: string;
  roles: string[];
}

export default function WorkersWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workers, setWorkers] = useState<Worker[]>([
    {
      id: '1',
      initials: 'TU',
      name: 'Test User',
      email: 'test.user@gmail.com',
      phone: '323-456-789',
      roles: ['Admin', 'Trener']
    },
    {
      id: '2',
      initials: 'DS',
      name: 'Daniel Semeriyan',
      email: 'daniel.semeriyan@gmail.com',
      phone: 'Brak numeru',
      roles: ['Trener']
    },
    {
      id: '3',
      initials: 'JW',
      name: 'Jakub Wesołowski',
      email: 'wesolowskii.jakub@gmail.com',
      phone: '665-474-689',
      roles: ['Admin', 'Trener']
    },
    {
      id: '4',
      initials: 'PK',
      name: 'Piotr Kurek',
      email: 'gatuno@gatuno.pl',
      phone: '608-357-310',
      roles: ['Admin', 'Trener']
    }
  ]);

  const handleAddWorker = () => {
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    // Clear filters logic here
  };

  const handleSubmitWorker = (workerData: any) => {
    const newWorker: Worker = {
      id: Math.random().toString(),
      initials: `${workerData.firstName[0]}${workerData.lastName[0]}`,
      name: `${workerData.firstName} ${workerData.lastName}`,
      email: workerData.email,
      phone: workerData.phone || 'Brak numeru',
      roles: workerData.roles || []
    };
    setWorkers([...workers, newWorker]);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 mt-[64px]">
      <div className="md:w-full max-w-xl md:max-w-none mx-auto">
        <WorkersHeader 
          onAddWorker={handleAddWorker} 
          onClearFilters={handleClearFilters}
        />
        <WorkersList workers={workers} />
        <AddWorkerModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitWorker}
        />
      </div>
    </div>
  );
}