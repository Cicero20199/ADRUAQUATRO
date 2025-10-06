import React from 'react';
import type { Event, ParticipantGroup, EventCategory } from '../types';
import { BookOpenIcon, MicrophoneIcon, MusicNoteIcon, UserGroupIcon, UsersIcon, SparklesIcon } from './IconComponents';

const EventParticipants: React.FC<{ groups: ParticipantGroup[] }> = ({ groups }) => (
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
        {groups.map((group, index) => (
            <div key={index}>
                <h4 className="font-semibold text-sm text-sky-800">{group.title}</h4>
                <ul className="text-slate-600 text-sm list-disc list-inside">
                    {group.names.map((name, i) => (
                        <li key={i} className="ml-2">{name}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const categoryStyles: Record<EventCategory, { borderColor: string; iconColor: string }> = {
    'Culto': { borderColor: 'border-sky-500', iconColor: 'text-sky-600' },
    'Oração': { borderColor: 'border-amber-500', iconColor: 'text-amber-600' },
    'Estudo': { borderColor: 'border-green-500', iconColor: 'text-green-600' },
    'Ensaio': { borderColor: 'border-purple-500', iconColor: 'text-purple-600' },
    'Visita': { borderColor: 'border-rose-500', iconColor: 'text-rose-600' },
};

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
    const styles = categoryStyles[event.category] || { borderColor: 'border-slate-300', iconColor: 'text-slate-500' };

    const getIcon = (category: EventCategory) => {
        const iconProps = { className: `h-5 w-5 ${styles.iconColor}` };
        switch (category) {
            case 'Culto': return <MicrophoneIcon {...iconProps} />;
            case 'Estudo': return <BookOpenIcon {...iconProps} />;
            case 'Ensaio': return <MusicNoteIcon {...iconProps} />;
            case 'Oração': return <SparklesIcon {...iconProps} />;
            case 'Visita': return <UserGroupIcon {...iconProps} />;
            default: return <UsersIcon {...iconProps} />;
        }
    }

    return (
        <div className="flex items-start gap-4">
            {event.time && (
                <div className="flex flex-col items-center">
                    <span className="font-bold text-lg text-slate-900">{event.time.replace('h', '')}</span>
                    <span className="text-xs text-slate-500 -mt-1">h</span>
                </div>
            )}
            <div className={`flex-1 border-l-4 ${styles.borderColor} pl-4 pb-6`}>
                 <div className="flex items-center gap-2">
                    {getIcon(event.category)}
                    <h3 className="font-bold text-md text-slate-800">{event.title}</h3>
                </div>

                {typeof event.details === 'string' && <p className="text-sm text-slate-600 mt-1">{event.details}</p>}
                {Array.isArray(event.details) && event.details.map((d, i) => <p key={i} className="text-sm text-slate-600 mt-1">{d}</p>)}
                
                {event.leaders && (
                     <div className="mt-3">
                         <h4 className="font-semibold text-sm text-sky-800">{event.leaders.title}</h4>
                         <ul className="text-slate-600 text-sm list-disc list-inside">
                             {event.leaders.names.map((name, i) => (
                                <li key={i} className="ml-2">{name}</li>
                             ))}
                         </ul>
                     </div>
                )}
                
                {event.preacher && <p className="text-sm text-slate-600 mt-2"><span className="font-semibold text-sky-800">Preletor:</span> {event.preacher}</p>}

                {event.participants && <EventParticipants groups={event.participants} />}
                
                {event.subEvents && (
                  <div className="mt-4 space-y-3 pl-4 border-l-2 border-dashed border-slate-300">
                    {event.subEvents.map((sub, index) => (
                        <div key={index}>
                            <p className="font-semibold text-sm text-slate-700">{sub.title}</p>
                            {sub.preacher && <p className="text-xs text-slate-500"><span className="font-medium">Responsável:</span> {sub.preacher}</p>}
                        </div>
                    ))}
                  </div>
                )}
            </div>
        </div>
    );
};

interface ScheduleCardProps {
  day: string;
  date: string;
  events: Event[];
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ day, date, events }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full">
      <div className="bg-gradient-to-r from-sky-700 to-sky-600 p-4 text-white">
        <h2 className="text-2xl font-bold font-serif">{day}</h2>
        <p className="font-semibold opacity-90">{date}</p>
      </div>
      <div className="p-5 flex-1">
        <div className="space-y-0">
          {events.map((event, index) => (
             <EventItem key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};