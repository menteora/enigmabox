
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

// Legge la variabile d'ambiente BASE_URL (es. impostata da CI/CD o .env)
// Se non esiste, il default è '/' (root)
const base = process.env.BASE_URL || '/';
// Vite e Vike richiedono che il base path termini con '/'
const normalizedBase = base.endsWith('/') ? base : `${base}/`;

export default defineConfig({
  base: normalizedBase,
  plugins: [
    react(), 
    tailwindcss(),
    vike({
      prerender: true 
    })
  ],
  server: {
    cors: true,
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: false
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  }
});
