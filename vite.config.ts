import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin personalizzato per pulire l'HTML durante la build di produzione
const htmlBuildPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html, { command }) {
      if (command === 'build') {
        // Rimuove lo script CDN di Tailwind
        html = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '');
        // Rimuove la configurazione inline di Tailwind
        html = html.replace(/<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*<\/script>/, '');
        // Rimuove l'importmap (non serve nella build bundle)
        html = html.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
        return html;
      }
      return html;
    },
  };
};

export default defineConfig({
  plugins: [
    react(), 
    htmlBuildPlugin()
  ],
  build: {
    // Importante per react-snap: compila features moderne (come optional chaining ?.)
    // in sintassi compatibile con il browser headless usato per il pre-rendering
    target: 'es2015',
    cssCodeSplit: false, // Opzionale: unisce il CSS in un file unico per evitare flash
  }
});