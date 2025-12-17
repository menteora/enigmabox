
import type { Config } from 'vike/types';
import { PageShell } from './PageShell';

// Fix: The 'Layout' property is provided by vike-react. We cast the configuration object 
// to any because the base Config type from vike/types may not include this property 
// unless the project is correctly configured with vike-react types augmentation.
export default {
  // Estende vike-react per semplificare il setup
  extends: [require('vike-react/config')],
  // Fixed: Use 'Layout' instead of 'PageShell' as required by vike-react
  Layout: PageShell,
  // Titolo di default
  title: 'Enigma Box - Regala un\'emozione',
} as any;
