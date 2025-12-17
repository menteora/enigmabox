
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
      // prerender: true
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // In sviluppo usiamo index.html -> index.tsx, 
      // in build Vike genererà le sue pagine.
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    // Removed historyApiFallback as it is not a valid property in Vite's ServerOptions
  }
});