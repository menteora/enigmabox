
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, MemoryRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { PageShell } from './renderer/PageShell';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import { IS_STUDIO, IS_ONE_PAGE } from './constants';

const App = () => {
  // Se siamo in Studio, usiamo MemoryRouter: la navigazione avviene solo in memoria locale, 
  // l'URL della barra indirizzi del browser padre non cambia e non "scappa" verso ai.studio.
  const Router = IS_STUDIO ? MemoryRouter : HashRouter;

  return (
    <PageShell>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Se OnePage (Studio), mostriamo Home perché contiene le sezioni scrollabili. Altrimenti Catalog/FAQ separate. */}
          <Route path="/products" element={IS_ONE_PAGE ? <Home /> : <Catalog />} />
          <Route path="/faq" element={IS_ONE_PAGE ? <Home /> : <FAQ />} />
          
          <Route path="/products/:id" element={<ProductWrapper />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </PageShell>
  );
};

const ProductWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <ProductDetail id={id} />;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
