
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import prerender from 'vite-plugin-ssg-prerender';
import path from 'path';

// Plugin per rimuovere script CDN e importmaps durante il build
function htmlBuildPlugin(): Plugin {
  return {
    name: 'html-transform',
    apply: 'build',
    transformIndexHtml(html) {
      return html
        .replace(/<script type="importmap">[\s\S]*?<\/script>/, '')
        .replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '')
        .replace(/<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*<\/script>\s*/g, '');
    },
  };
}

export default defineConfig({
  base: '/enigmabox/',
  plugins: [
    react(), 
    tailwindcss(),
    htmlBuildPlugin(),
    prerender({
      // Rotte necessarie: Home, Catalogo, FAQ e i singoli prodotti per SEO
      routes: [
        '/', 
        '/products', 
        '/products/box-classica', 
        '/products/box-wood', 
        '/products/box-midnight', 
        '/faq'
      ],
      // Opzioni per ssg-prerender
      puppeteerOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      // Attendiamo l'evento custom nel DOM per assicurarci che React abbia finito il mount
      renderAfterDocumentEvent: 'custom-render-trigger'
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    emptyOutDir: true,
  }
});
