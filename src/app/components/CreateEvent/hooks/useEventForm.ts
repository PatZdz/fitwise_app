import { useState, Dispatch, SetStateAction } from 'react';
import { FormData, InputChangeEvent, KeyPressEvent } from '../types';

interface UseEventFormReturn {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleInputChange: (e: InputChangeEvent) => void;
  handleClear: () => void;
  handleSubmit: () => void;
  addClient: (clientName: string) => void;
  removeClient: (clientToRemove: string) => void;
  handleKeyPress: (e: KeyPressEvent) => void;
}

export const useEventForm = (): UseEventFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    name: 'Trening personalny',
    type: 'Indywidualne',
    color: 'Zielony',
    date: new Date(),
    timeStart: '14:00',
    timeEnd: '15:30',
    frequency: 'Nie powtarza się',
    employee: 'Jan Trenerowski',
    clients: ['Adam Nowak', 'Rafał Sobielski'],
    searchClient: ''
  });

  const handleInputChange = (e: InputChangeEvent) => {
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
      date: new Date(),
      timeStart: '',
      timeEnd: '',
      frequency: 'Nie powtarza się',
      employee: '',
      clients: [],
      searchClient: ''
    });
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

  const addClient = (clientName: string) => {
    if (!clientName.trim()) return;
    
    if (!formData.clients.includes(clientName)) {
      setFormData(prev => ({
        ...prev,
        clients: [...prev.clients, clientName],
        searchClient: ''
      }));
    }
  };

  const handleKeyPress = (e: KeyPressEvent) => {
    if (e.key === 'Enter') {
      addClient(formData.searchClient);
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleClear,
    handleSubmit,
    addClient,
    removeClient,
    handleKeyPress
  };
};