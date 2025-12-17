
import type { Config } from 'vike/types';
import { PageShell } from './PageShell';

export default {
  // Estende vike-react per semplificare il setup
  extends: [require('vike-react/config')],
  // Wrapper globale per ogni pagina
  PageShell,
  // Titolo di default
  title: 'Enigma Box - Regala un\'emozione',
} satisfies Config;
