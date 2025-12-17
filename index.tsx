import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const container = document.getElementById('root');

if (container) {
  if (container.hasChildNodes()) {
    container.innerHTML = '';
  }

  createRoot(container).render(
    <React.StrictMode>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </React.StrictMode>
  );
}
