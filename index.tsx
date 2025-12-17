import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

  createRoot(container).render(
    <React.StrictMode>
      <ThemeProvider>
        {/* HashRouter è ideale per ambienti di preview o server statici senza configurazione di rewrite */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}