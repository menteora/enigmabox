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

// --- NAVIGAZIONE ---
export const NAV_LINKS: NavLink[] = [
  { label: 'Come funziona', href: '#how-it-works' },
  { label: 'Le Enigma Box', href: '#products' },
  { label: 'Recensioni', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const NAV_TEXT = {
  logo: 'Enigma Box',
  cta: 'Acquista Ora'
};

// --- HERO SECTION ---
export const HERO_TEXT = {
  badge: 'Nuova Collezione Disponibile',
  titlePart1: "Un enigma, un'emozione,",
  titleAccent: "un ricordo eterno.",
  description: "Non è solo un regalo, è un'esperienza. Racchiudi i tuoi sentimenti più profondi in una scatola enigmatica che rivela il suo segreto solo a chi possiede la chiave del cuore.",
  ctaPrimary: "Crea la tua Enigma Box",
  ctaSecondary: "Scopri come funziona",
  imgPlaceholder: "Immagine Enigma Box"
};

// --- EMOTIONS SECTION ---
export const EMOTIONS_TEXT = {
  title: "Scegli la tua emozione",
  subtitle: "Ogni box è pensata per un momento specifico della vita. Quale storia vuoi raccontare oggi?"
};

export const EMOTIONS: EmotionItem[] = [
  { id: '1', label: 'Celebra', icon: Sparkles },
  { id: '2', label: 'Grazie', icon: Heart },
  { id: '3', label: 'Ti sono vicino', icon: HandHeart },
  { id: '4', label: 'Coraggio', icon: Feather },
  { id: '5', label: 'Ricordi', icon: Clock },
  { id: '6', label: 'Ricominciamo', icon: Hourglass },
];

// --- HOW IT WORKS SECTION ---
export const HOW_IT_WORKS_TEXT = {
  sectionTitle: "Come funziona la magia",
  sectionDesc: "Abbiamo reso semplice creare un momento indimenticabile. In pochi passi, trasformerai un semplice pensiero in un'esperienza tangibile e misteriosa.",
  videoPlaceholder: "Video Tutorial"
};

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

// --- HOME BOTTOM CTA ---
export const HOME_CTA_TEXT = {
  title: "Pronto a stupire?",
  subtitle: "Non aspettare un'occasione speciale. Rendilo speciale tu.",
  button: "Acquista la tua Enigma Box"
};

// --- FOOTER ---
export const FOOTER_TEXT = {
  brandDesc: "Regala un'emozione che dura per sempre. Il modo più originale per dire ciò che provi.",
  copyright: `© ${new Date().getFullYear()} Enigma Box. Tutti i diritti riservati.`,
  columns: {
    useful: {
      title: "Link Utili",
      links: [
        { label: "Chi siamo", href: "#" },
        { label: "Contatti", href: "#" },
        { label: "Spedizioni", href: "#" },
        { label: "Resi", href: "#" }
      ]
    },
    legal: {
      title: "Legale",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Termini e Condizioni", href: "#" }
      ]
    }
  }
};