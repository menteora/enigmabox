
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
import { EmotionItem, StepItem, NavLink, Product } from './types';

/**
 * BASE_URL dinamico fornito da Vite.
 * Se base è '/', import.meta.env.BASE_URL è '/'.
 * Se base è '/enigmabox/', import.meta.env.BASE_URL è '/enigmabox/'.
 * Lo normalizziamo rimuovendo lo slash finale per facilitare la concatenazione.
 */
// Fix for Error: Property 'env' does not exist on type 'ImportMeta'
// We cast import.meta to any to satisfy the TypeScript compiler in environments where Vite types are not automatically picked up.
const rawBase = (import.meta as any).env?.BASE_URL || '/';
const BASE_URL = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

// --- NAVIGAZIONE ---
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: `${BASE_URL}/` },
  { label: 'Le Enigma Box', href: `${BASE_URL}/products` },
  { label: 'FAQ', href: `${BASE_URL}/faq` },
];

export const NAV_TEXT = {
  logo: 'Enigma Box',
  cta: 'Acquista Ora'
};

// --- PRODUCTS DATA ---
export const PRODUCTS: Product[] = [
  {
    id: 'box-classica',
    title: 'Enigma Classic',
    price: 49.00,
    shortDescription: 'L\'eleganza senza tempo per ogni occasione.',
    description: 'La Enigma Classic è il punto di partenza perfetto. Realizzata in cartone pregiato con finiture in oro a caldo, questa scatola è ideale per custodire messaggi di affetto, auguri di compleanno o semplici pensieri che meritano di essere ricordati.',
    imageColor: 'bg-stone-200 dark:bg-stone-800',
    features: ['QR Code personalizzato', 'Messaggio audio/video fino a 2min', 'Materiali riciclabili premium']
  },
  {
    id: 'box-wood',
    title: 'Wood Edition',
    price: 89.00,
    shortDescription: 'Calore naturale e artigianalità per momenti preziosi.',
    description: 'Intagliata in legno di noce sostenibile, la Wood Edition è pensata per durare nel tempo. Una vera e propria cassaforte di ricordi che diventa un complemento d\'arredo. Perfetta per anniversari e matrimoni.',
    imageColor: 'bg-amber-200 dark:bg-amber-900',
    features: ['Legno massello', 'Incisione personalizzata', 'Messaggio video 4K illimitato', 'Accesso prioritario al cloud']
  },
  {
    id: 'box-midnight',
    title: 'Midnight Mystery',
    price: 65.00,
    shortDescription: 'Un tocco di mistero con finiture nere opache.',
    description: 'Per chi ama il design moderno e minimale. La Midnight Mystery si presenta con una finitura soft-touch nera profonda e dettagli lucidi. Ideale per sorprese intriganti e rivelazioni inaspettate.',
    imageColor: 'bg-slate-800 dark:bg-black',
    features: ['Finitura Soft-Touch', 'QR Code invisibile (UV)', 'Supporto Realtor Aumentata']
  }
];

// Per link diretti fuori dalla navigazione principale. 
// Se BASE_URL è '', ritorna semplicemente '/path'.
export const getUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
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

// --- FAQ DATA ---
export const FAQS = [
  {
    q: "Come carico il mio messaggio?",
    a: "Dopo l'acquisto riceverai un link via email. Potrai caricare video, foto o testo quando vuoi, anche dopo che la scatola è stata spedita."
  },
  {
    q: "Il destinatario vede il messaggio subito?",
    a: "No! Il destinatario vedrà solo un bellissimo QR code. Dovrà scansionarlo per rivelare il contenuto segreto."
  },
  {
    q: "Posso cambiare il messaggio dopo?",
    a: "Sì, hai 24 ore di tempo dalla prima scansione per modificare il contenuto, oppure puoi acquistare l'opzione 'Messaggio Dinamico' per cambiarlo sempre."
  },
  {
    q: "Quali sono i tempi di spedizione?",
    a: "Spediamo in 24/48 ore lavorative in tutta Italia."
  }
];

// --- FOOTER ---
export const FOOTER_TEXT = {
  brandDesc: "Regala un'emozione che dura per sempre. Il modo più originale per dire ciò che provi.",
  copyright: `© ${new Date().getFullYear()} Enigma Box. Tutti i diritti riservati.`,
  columns: {
    useful: {
      title: "Link Utili",
      links: [
        { label: "Home", href: `${BASE_URL}/` },
        { label: "Le Box", href: `${BASE_URL}/products` },
        { label: "FAQ", href: `${BASE_URL}/faq` },
      ]
    },
    legal: {
      title: "Legale",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Termini e Condizioni", href: "#" }
      ]
    }
  }
};
