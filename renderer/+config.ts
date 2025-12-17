
import vikeReact from 'vike-react/config';
import { PageShell } from './PageShell';

export default {
  // Estende vike-react
  extends: [vikeReact],
  
  // Abilita il pre-rendering (SSG)
  prerender: true,
  
  // Specifica il componente Layout
  Layout: PageShell,
  
  // Titolo predefinito
  title: "Enigma Box - Regala un'emozione",
};
