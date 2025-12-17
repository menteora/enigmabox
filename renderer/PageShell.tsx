
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import '../index.css';

/**
 * PageShell per Vike.
 * NOTA: Non inseriamo alcun Router qui (BrowserRouter/HashRouter).
 * Vike gestisce il routing internamente durante la build SSG.
 */
export const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </React.StrictMode>
  );
};
