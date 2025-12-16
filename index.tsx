import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

// Add basic CSS reset and animation utilities directly here if index.css is not present, 
// or assume index.css handles tailwind directives. 
// For this environment, we rely on the CDN in html but we can add inline styles for specific keyframes.

const GlobalStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    .delay-100 { animation-delay: 100ms; }
    .delay-200 { animation-delay: 200ms; }
    .delay-300 { animation-delay: 300ms; }
    .delay-500 { animation-delay: 500ms; }
  `}</style>
);

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

if (container && container.hasChildNodes()) {
  hydrateRoot(container, app);
} else if (container) {
  createRoot(container).render(app);
}