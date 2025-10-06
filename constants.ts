import React from 'react';
import type { ScheduleDay, ImportantNotice, FinalSection } from './types';
import { CalendarIcon, ClockIcon, UserGroupIcon } from './components/IconComponents';

export const scheduleData: ScheduleDay[] = [
  {
    day: "Domingo",
    date: "03/08",
    events: [
      {
        time: "07h",
        title: "CONSAGRAÇÃO PARA O DEPARTAMENTO DE SENHORES",
        category: "Oração",
        leaders: {
          title: "Direção",
          names: ["PB. JOSEILSON SILVA", "DC. FRANCISCO SILVEIRA"],
        },
      },
      {
        time: "09h",
        title: "Escola Bíblica Dominical",
        category: "Estudo",
        details: ["Lição 5 - 3° Trimestre."],
        leaders: {
          title: "Superintendência",
          names: ["Dc. Erik Ray", "IR. DÉBORA MACIEL"],
        },
        subEvents: [
          { title: "CLASSE DE ADULTOS: UMA IGREJA CHEIA DE AMOR", preacher: "PB. MARCOS ANTONIO", category: "Estudo" },
          { title: "CLASSE DE JOVENS (BEREANOS): ADVERTÊNCIA CONTRA O LEGALISMO", preacher: "CP. ALEX FERREIRA", category: "Estudo" },
          { title: "CLASSE DE ADOLESCENTES (REMANESCENTES): VAMOS CONHECER A CARTA DE TIAGO", preacher: "IR. REBECA MEDEIROS", category: "Estudo" },
          { title: "CLASSE DE JUNIORES (AMIGOS DE CRISTO): A LIÇÃO DA ÁRVORE E OS SEUS FRUTOS", preacher: "IR. SOLANGE TOMAZ", category: "Estudo" },
          { title: "CLASSE DE PRIMÁRIOS (LÍRIO DOS VALES): 'DEUSES' OU MISSIONÁRIOS?", preacher: "IR. ISMAEL MANON", category: "Estudo" },
        ]
      },
      {
        time: "11h",
        title: "ENSAIO PARA O MINISTÉRIO DE LOUVOR SHEKHINAH",
        category: "Ensaio",
      },
      {
        time: "18h",
        title: "CULTO DE MISSÕES",
        category: "Culto",
        participants: [
            { title: "Direção", names: ["PB. ROBERTO MARQUES", "PB. JOSEILSON SILVA"] },
            { title: "Portaria", names: ["DC. EGUIBERTO CASTRO", "DC. EUDES DOS SANTOS"] },
            { title: "Ofertório", names: ["CP. ELIAS MENDES", "CP. JOSÉ LUCAS"] }
        ],
      },
    ],
  },
  {
    day: "Segunda-feira",
    date: "04/08",
    events: [
      {
        time: "19h",
        title: "Círculo de Oração",
        category: "Oração",
        leaders: {
          title: "Direção",
          names: ["IRS. AURICÉLIA ARAGÃO", "JUCINETE DE SOUZA", "MARIA EUGÊNIA", "DÉBORA MACIEL", "JÚLIA LIMA", "NEUMA HONORATO"],
        },
        preacher: "PB. JONHATA GADELHA",
        participants: [
          { title: "Portaria", names: ["CP. ALEX FERREIRA"] }
        ],
      },
    ],
  },
  {
    day: "Terça-feira",
    date: "05/08",
    events: [
      {
        time: "19h",
        title: "CULTO DE ADOLESCENTES",
        category: "Culto",
        participants: [
          { title: "Direção", names: ["IRS. AURICÉLIA ARAGÃO", "DANIEL SANTOS", "SULAMITA DE SOUZA"] },
          { title: "Portaria", names: ["PB. EMANUEL SARAIVA", "CP. JOHNATA MOURA"] }
        ],
      },
    ],
  },
  {
    day: "Quarta-feira",
    date: "06/08",
    events: [
      {
        time: "15h",
        title: "VISITA NOS LARES",
        category: "Visita",
      },
    ],
  },
  {
    day: "Quinta-feira",
    date: "07/08",
    events: [
      {
        time: "19h",
        title: "CULTO DE DOUTRINA E EDIFICAÇÃO CRISTÃ",
        category: "Culto",
        participants: [
          { title: "Direção", names: ["CP. ÍTALO ROCHA", "DC. ROGÉRIO FARIAS"] },
          { title: "Portaria", names: ["CP. LUCAS PINHEIRO MARQUES", "CP. MÁRCIO ERICK"] },
          { title: "Ofertório", names: ["DC. RAIMUNDO FONTELES", "DC. MÁRCIO GOMES"] }
        ],
      },
    ],
  },
  {
    day: "Sexta-feira",
    date: "08/08",
    events: [
      { time: "19h", title: "ENSAIO PARA O CONJUNTO LOUVORES DIVINOS", category: "Ensaio" },
      { time: "20h", title: "ENSAIO PARA O CONJUNTO LÍRIO DOS VALES", category: "Ensaio" },
      { time: "20h20", title: "ENSAIO PARA O CONJUNTO CANTORES DE SIÃO", category: "Ensaio" },
    ],
  },
    {
    day: "Sábado",
    date: "09/08",
    events: [
      { time: "15h", title: "ENSAIO PARA O CONJUNTO RENASCER", category: "Ensaio" },
      { time: "16h", title: "ENSAIO PARA O CONJUNTO HERDEIROS DO REI", category: "Ensaio" },
    ],
  },
];

export const importantNotices: ImportantNotice[] = [
  {
    icon: React.createElement(CalendarIcon, { className: "h-8 w-8 text-sky-700 flex-shrink-0 mt-1" }),
    title: "16 DE AGOSTO, 3° SÁBADO - BATISMO NAS ÁGUAS",
    details: ["Local: Igreja Sede", "Horário: 08h00"]
  },
  {
    icon: React.createElement(ClockIcon, { className: "h-8 w-8 text-sky-700 flex-shrink-0 mt-1" }),
    title: "SEGUNDA A SEXTA-FEIRA – CONSAGRAÇÃO",
    details: [
      "Horário: Das 7h às 8h",
      "Responsáveis: IRS. JUCINETE DE SOUZA | RAIMUNDA MACÊDO | HELENA VIDAL | RITA FERNANDES | JÚLIA LIMA | NEUMA HONORATO"
    ]
  },
  {
    icon: React.createElement(UserGroupIcon, { className: "h-8 w-8 text-sky-700 flex-shrink-0 mt-1" }),
    title: "RESPONSABILIDADE DE LIMPEZA E ORGANIZAÇÃO",
    details: [
      "Cada departamento local é responsável pela limpeza e organização nos dias de seus trabalhos.",
      "Isso inclui obreiros escalados para a direção de cultos."
    ]
  }
];

export const finalSections: FinalSection[] = [
  {
    title: "ORAÇÃO POR TODOS OS DIZIMISTAS E OFERTANTES",
    quote: "E aqui certamente tomam dízimos homens que morrem; ali, porém, aquele de quem se testifica que vive.",
    reference: "Hebreus 7:8"
  },
  {
    title: "ORAÇÃO PELOS ENFERMOS E POR CAUSAS IMPOSSÍVEIS",
    quote: "E servireis ao Senhor, vosso Deus, e ele abençoará o vosso pão e a vossa água; e eu tirarei do meio de ti as enfermidades.",
    reference: "Êxodo 23:25"
  }
];