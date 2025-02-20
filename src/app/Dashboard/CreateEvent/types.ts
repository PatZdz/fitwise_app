import { Dispatch, SetStateAction } from 'react';

export interface EventFormData {
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

export type FormData = EventFormData;

export interface InputChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

export interface KeyPressEvent {
  key: string;
}

export type FormDataDispatch = Dispatch<SetStateAction<EventFormData>>;