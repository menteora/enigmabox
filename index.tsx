
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PageShell } from './renderer/PageShell';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';

// Componente di debug per monitorare i cambiamenti di rotta nell'hash
const RouterMonitor = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log("[Router] Path attuale:", location.pathname, "| Hash:", window.location.hash);
  }, [location]);
  return null;
};

const App = () => {
  return (
    <PageShell>
      {/* HashRouter è immune ai problemi di configurazione server del proxy di Google */}
      <HashRouter>
        <RouterMonitor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductWrapper />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Reindirizza qualsiasi percorso sconosciuto alla home dell'hash per evitare errori 404/Empty State */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </PageShell>
  );
};

import { useParams } from 'react-router-dom';
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
  console.log("[App] Montata correttamente");
}
