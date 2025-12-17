
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import '../index.css';

export const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </React.StrictMode>
  );
};
