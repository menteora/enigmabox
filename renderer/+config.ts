
import vikeReact from 'vike-react/config';
import { PageShell } from './PageShell';

const base = process.env.BASE_URL || '/';
const normalizedBase = base.endsWith('/') ? base : `${base}/`;

export default {
  // Estende vike-react
  extends: [vikeReact],
  
  // Configurazione dinamica per distribuzione (es. /enigmabox/ o /)
  baseAssets: normalizedBase,
  baseServer: normalizedBase,
  
  // Abilita il pre-rendering (SSG)
  prerender: true,
  
  // Specifica il componente Layout
  Layout: PageShell,
  
  // Titolo predefinito
  title: "Enigma Box - Regala un'emozione",
};
