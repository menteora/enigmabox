import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Plugin to remove CDN scripts and importmaps during build
// This ensures the production build uses the bundled dependencies (react, react-router, etc.)
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
  base: '/', // Utilizziamo la root per massimizzare la compatibilità con BrowserRouter
  plugins: [
    react(), 
    tailwindcss(),
    htmlBuildPlugin()
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    emptyOutDir: true,
  }
});
