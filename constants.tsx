import { 
  Sparkles, 
  Heart, 
  HandHeart, 
  Feather, 
  Clock, 
  Hourglass, 
  Gift, 
  MessageSquareText, 
  ScanQrCode 
} from 'lucide-react';
import { EmotionItem, StepItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Come funziona', href: '#how-it-works' },
  { label: 'Le Enigma Box', href: '#products' },
  { label: 'Recensioni', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const EMOTIONS: EmotionItem[] = [
  { id: '1', label: 'Celebra', icon: Sparkles },
  { id: '2', label: 'Grazie', icon: Heart },
  { id: '3', label: 'Ti sono vicino', icon: HandHeart },
  { id: '4', label: 'Coraggio', icon: Feather },
  { id: '5', label: 'Ricordi', icon: Clock },
  { id: '6', label: 'Ricominciamo', icon: Hourglass },
];

export const STEPS: StepItem[] = [
  {
    id: 'step-1',
    title: 'Personalizza',
    description: "Scegli per chi è l'emozione e lo stile.",
    icon: Gift,
  },
  {
    id: 'step-2',
    title: 'Inserisci il messaggio',
    description: 'Carica un video, audio o dedica (anche dopo l\'ordine).',
    icon: MessageSquareText,
  },
  {
    id: 'step-3',
    title: "Consegna l'Enigma",
    description: 'Loro scansionano il QR e scoprono il messaggio.',
    icon: ScanQrCode,
  },
];
