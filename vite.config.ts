import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function htmlBuildPlugin(): Plugin {
  return {
    name: 'html-transform',
    apply: 'build', // ✅ solo durante vite build
    transformIndexHtml(html) {
      // Rimuove lo script CDN di Tailwind
      html = html.replace(
        /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*/g,
        ''
      );

      // Rimuove la configurazione inline di Tailwind
      html = html.replace(
        /<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*<\/script>\s*/g,
        ''
      );

      // Rimuove l'importmap (non serve nella build bundle)
      html = html.replace(
        /<script\s+type="importmap">[\s\S]*?<\/script>\s*/g,
        ''
      );

      return html;
    },
  };
}

export default defineConfig({
  base: '/enigmabox/',
  plugins: [react(), htmlBuildPlugin()],
});
