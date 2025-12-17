
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      {/* HashRouter è perfetto per l'anteprima online e Google Studio AI 
          perché non richiede configurazione speciale sul server per i 404 */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

const container = document.getElementById('page-view');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
