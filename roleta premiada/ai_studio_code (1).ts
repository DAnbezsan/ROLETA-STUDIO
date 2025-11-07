import { Prize } from './types';

export const PRIZES: Prize[] = [
  { id: 1, name: 'DESIGN 50%', emoji: '🎉' },
  { id: 2, name: 'FIO A FIO 50%', emoji: '✨' },
  { id: 3, name: 'SHADOW L. 50%', emoji: '💖' },
  { id: 4, name: 'DESIGN 100%', emoji: '🎁' },
  { id: 5, name: 'FIO A FIO 100%', emoji: '💎' },
  { id: 6, name: 'SHADOW L. 100%', emoji: '🏆' },
];

export const PRIZES_SEQUENCE: string[] = [
  'DESIGN 50%','DESIGN 50%','DESIGN 50%','DESIGN 50%','DESIGN 50%',
  'FIO A FIO 50%','FIO A FIO 50%','FIO A FIO 50%',
  'DESIGN 50%','DESIGN 50%','DESIGN 50%','DESIGN 50%','DESIGN 50%',
  'SHADOW L. 50%','SHADOW L. 50%',
  'DESIGN 50%','DESIGN 50%','DESIGN 50%','DESIGN 50%','DESIGN 50%',
  'FIO A FIO 50%','FIO A FIO 50%','FIO A FIO 50%',
  'DESIGN 50%','DESIGN 50%','DESIGN 50%',
  'FIO A FIO 50%','FIO A FIO 50%',
  'SHADOW L. 100%',
  'DESIGN 100%','DESIGN 100%',
  'DESIGN 50%','DESIGN 50%',
  'SHADOW L. 50%','SHADOW L. 50%',
  'FIO A FIO 100%',
  'FIO A FIO 50%','FIO A FIO 50%',
  'DESIGN 100%','DESIGN 100%','DESIGN 100%',
  'SHADOW L. 50%',
  'DESIGN 100%','DESIGN 100%',
  'FIO A FIO 100%',
  'SHADOW L. 100%',
  'FIO A FIO 100%'
];

export const SPIN_DURATION_MS = 4200;

// Configuração da Lógica de Negócios
export const OWNER_WHATSAPP = "5577981633924"; // Substitua pelo seu número de WhatsApp
export const ADMIN_PHONE = "77998652620"; // Substitua pelo seu telefone de administrador