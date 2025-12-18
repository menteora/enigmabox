
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import '../index.css';

// Componente shell che avvolge l'intera applicazione fornendo i context necessari e gli stili base
export const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f9f7f2] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 selection:bg-black/10 dark:selection:bg-white/10">
        {children}
      </div>
    </ThemeProvider>
  );
};
