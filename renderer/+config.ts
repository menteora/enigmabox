
import vikeReact from 'vike-react/config';
import { PageShell } from './PageShell';

export default {
  // Estende vike-react utilizzando l'import ESM compatibile con Vite e Vike V1
  extends: [vikeReact],
  
  // Specifica il componente Layout (fornito da vike-react)
  Layout: PageShell,
  
  // Titolo predefinito per l'applicazione
  title: "Enigma Box - Regala un'emozione",
};
