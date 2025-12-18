
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, MemoryRouter, Routes, Route, Navigate, useLocation, useParams, useNavigate } from 'react-router-dom';
import { PageShell } from './renderer/PageShell';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import { IS_NO_BASE } from './constants';

/**
 * Componente che ascolta l'evento 'soft-navigate' per gestire la navigazione 
 * programmatica nel MemoryRouter senza causare ricaricamenti di pagina che 
 * farebbero crashare l'iframe di Google AI Studio.
 */
const NavigationListener = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleSoftNavigate = (e: any) => {
      const targetPath = e.detail;
      if (targetPath && targetPath !== location.pathname) {
        navigate(targetPath);
      }
    };

    window.addEventListener('soft-navigate', handleSoftNavigate);
    return () => window.removeEventListener('soft-navigate', handleSoftNavigate);
  }, [navigate, location]);

  return null;
};

const RouterMonitor = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log("[Router] Path attuale:", location.pathname, "| Hash:", window.location.hash);
  }, [location]);
  return null;
};

const App = () => {
  // Se non c'è BASE_URL (Studio/Local), usiamo MemoryRouter per non sporcare l'URL del browser padre.
  // Se c'è BASE_URL, usiamo HashRouter per la compatibilità con GitHub Pages.
  const Router = IS_NO_BASE ? MemoryRouter : HashRouter;

  return (
    <PageShell>
      <Router>
        <NavigationListener />
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
}
