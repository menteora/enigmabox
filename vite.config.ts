import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Plugin to remove CDN scripts and importmaps during build
// This prevents "Double React" errors in production while allowing quick previews in cloud editors
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
  base:'/enigmabox/',
  plugins: [
    react(), 
    tailwindcss(),
    htmlBuildPlugin()
  ],
  build: {
    target: 'es2015',
  }
});