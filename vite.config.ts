
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

export default defineConfig({
  base: '/enigmabox/',
  plugins: [
    react(), 
    tailwindcss(),
    vike({
      prerender: true
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    emptyOutDir: true
    // Vike gestisce automaticamente rollupOptions.input. 
    // Inserire './index.html' qui causerebbe errori durante il comando 'vike build'.
  },
  server: {
    // Configurazione standard per lo sviluppo
  }
});
