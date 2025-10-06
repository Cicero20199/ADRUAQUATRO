import type React from 'react';

export interface ParticipantGroup {
  title: string;
  names: string[];
}

export type EventCategory = 'Culto' | 'Oração' | 'Estudo' | 'Ensaio' | 'Visita';

export interface Event {
  time?: string;
  title: string;
  category: EventCategory;
  details?: string | string[];
  leaders?: ParticipantGroup;
  participants?: ParticipantGroup[];
  subEvents?: Event[];
  preacher?: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  events: Event[];
}

export interface ImportantNotice {
  icon: React.ReactElement;
  title: string;
  details: string[];
}

export interface FinalSection {
  title: string;
  quote: string;
  reference: string;
}