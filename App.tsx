import React from 'react';
import { scheduleData, importantNotices, finalSections } from './constants';
import { ScheduleCard } from './components/ScheduleCard';
import { CrossIcon, MegaphoneIcon } from './components/IconComponents';
import type { ImportantNotice, EventCategory } from './types';

const categories: { key: EventCategory | 'All', label: string }[] = [
    { key: 'All', label: 'Ver Todos' },
    { key: 'Culto', label: 'Cultos' },
    { key: 'Oração', label: 'Oração' },
    { key: 'Estudo', label: 'Estudo' },
    { key: 'Ensaio', label: 'Ensaios' },
    { key: 'Visita', label: 'Visitas' },
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<EventCategory | 'All'>('All');

  const filteredSchedule = React.useMemo(() => {
    if (activeCategory === 'All') {
      return scheduleData;
    }
    return scheduleData
      .map(day => ({
        ...day,
        events: day.events.filter(event => event.category === activeCategory),
      }))
      .filter(day => day.events.length > 0);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
          <div className="flex items-center justify-center gap-4 text-sky-800">
            <CrossIcon className="h-10 w-10" />
            <h1 className="text-3xl md:text-5xl font-extrabold font-serif">Rodízio Semanal</h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mt-2">ÚLTIMA SEMANA DE JULHO / PRIMEIRA SEMANA DE AGOSTO</p>
        </header>

        <div className="mb-8 p-4 bg-white rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-3 text-center sm:text-left">Filtrar por Categoria</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                            activeCategory === key
                                ? 'bg-sky-700 text-white shadow-md'
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchedule.map((day) => (
              <ScheduleCard key={day.day} day={day.day} date={day.date} events={day.events} />
            ))}
          </div>
          
          {filteredSchedule.length === 0 && (
            <div className="text-center col-span-1 md:col-span-2 lg:col-span-3 py-12 bg-white rounded-xl shadow-lg border border-slate-200 -mt-6">
                <p className="text-slate-500 text-lg">Nenhum evento encontrado para esta categoria.</p>
            </div>
          )}

          <div className="mt-12 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
             <div className="flex items-center gap-3 mb-6">
              <MegaphoneIcon className="h-8 w-8 text-sky-800" />
              <h2 className="text-3xl font-bold font-serif text-slate-900">Avisos Importantes</h2>
            </div>
            <ul className="space-y-4">
              {importantNotices.map((notice: ImportantNotice, index: number) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-sky-50 rounded-lg border border-sky-200">
                  {notice.icon}
                  <div>
                    <h3 className="font-semibold text-lg text-sky-900">{notice.title}</h3>
                    {notice.details.map((detail, i) => (
                      <p key={i} className="text-slate-700">{detail}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {finalSections.map((section, index) => (
               <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                 <h3 className="text-xl font-semibold mb-4 font-serif">{section.title}</h3>
                 <p className="italic text-slate-300">"{section.quote}"</p>
                 <p className="font-semibold mt-2 text-slate-200">{section.reference}</p>
               </div>
            ))}
          </div>

        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Gerado com excelência para a obra do Senhor.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;