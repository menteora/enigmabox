import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

if (container && container.hasChildNodes()) {
  hydrateRoot(container, app);
} else if (container) {
  createRoot(container).render(app);
}