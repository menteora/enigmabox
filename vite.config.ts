
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

export default defineConfig({
  // Vike richiede che base inizi con '/', 'http://' o 'https://'
  // Usiamo '/' per la massima compatibilità nell'ambiente di anteprima
  base: '/enigmabox/',
  plugins: [
    react(), 
    tailwindcss(),
    vike({
      // Il prerender viene eseguito solo durante la compilazione (npm run build)
      prerender: true 
    })
  ],
  server: {
    cors: true,
    port: 5173,
    strictPort: true,
    hmr: {
      // Disabilita l'overlay per evitare blocchi visivi nel frame dell'anteprima
      overlay: false
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  }
});
