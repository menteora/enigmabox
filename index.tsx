
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, MemoryRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { PageShell } from './renderer/PageShell';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import { IS_NO_BASE } from './constants';

// Componente di debug per monitorare i cambiamenti di rotta
const RouterMonitor = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log("[Router] Path attuale:", location.pathname, "| Hash:", window.location.hash);
  }, [location]);
  return null;
};

const App = () => {
  // Se non c'è BASE_URL (Studio/Local), usiamo MemoryRouter per evitare redirect indesiderati.
  // Se c'è BASE_URL, usiamo HashRouter come richiesto per la compatibilità con GitHub Pages.
  const Router = IS_NO_BASE ? MemoryRouter : HashRouter;

  return (
    <PageShell>
      <Router>
        <RouterMonitor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductWrapper />} />
          <Route path="/faq" element={<FAQ />} />
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
  console.log(`[App] Montata correttamente con ${IS_NO_BASE ? 'MemoryRouter' : 'HashRouter'}`);
}
