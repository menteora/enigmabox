
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

export default defineConfig({
  base: '/enigmabox/',
  plugins: [
    react(), 
    tailwindcss(),
    vike()
  ],
  ssr: {
    noExternal: ['vike-react']
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true
  }
});
