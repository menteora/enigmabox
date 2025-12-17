
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

// Rileva se l'app è in esecuzione nell'ambiente di preview di AI Studio
const host = typeof window !== 'undefined' ? window.location.origin : '';
const isAiStudioPreview =
  host.includes('usercontent.goog') || host.includes('googleusercontent.com');

// Componente per le rotte condivise per evitare duplicazione
const AppRoutes = () => (
  <Routes>
    {/* Corretto: path="/" per la home, non "*" che catturerebbe tutto subito */}
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Catalog />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/faq" element={<FAQ />} />
    
    {/* Fallback: reindirizza alla Home se il percorso non esiste */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const container = document.getElementById('root');

if (container) {
  if (container.hasChildNodes() && !isAiStudioPreview) {
    // Se ci sono già nodi (grazie al prerendering), React 18 li gestisce con createRoot
    // ma in scenari avanzati si userebbe hydrateRoot. Qui procediamo con createRoot per semplicità.
    container.innerHTML = '';
  }

  createRoot(container).render(
    <React.StrictMode>
      <ThemeProvider>
        {isAiStudioPreview ? (
          <HashRouter>
            <AppRoutes />
          </HashRouter>
        ) : (
          <BrowserRouter basename="/enigmabox">
            <AppRoutes />
          </BrowserRouter>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );

  // Trigger per vite-plugin-prerender (se configurato renderAfterDocumentEvent)
  document.dispatchEvent(new Event('custom-render-trigger'));
}
