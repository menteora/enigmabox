
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const container = document.getElementById('root');

if (container) {
  if (container.hasChildNodes()) {
    container.innerHTML = '';
  }

  // Recupera il base URL dal build tool (default '/')
  // Fixed: Property 'env' does not exist on type 'ImportMeta' by casting to any
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';

  createRoot(container).render(
    <React.StrictMode>
      <ThemeProvider>
        {/* Passaggio a BrowserRouter per URL puliti senza # */}
        <BrowserRouter basename={baseUrl}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* 404 Fallback: Qualsiasi rotta non definita reindirizza alla Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
