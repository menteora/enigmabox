
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from 'vike/types';

export async function onRenderClient(pageContext: PageContextClient) {
  // Page e pageProps vengono iniettati da vike-react a runtime
  const { Page, pageProps } = pageContext as any;
  const container = document.getElementById('page-view');
  
  if (!container) {
    console.error('Elemento #page-view non trovato nel DOM.');
    return;
  }

  const page = (
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  );

  // Se il container ha già dell'HTML (prodotto dal prerendering), usiamo hydrateRoot
  if (pageContext.isHydration && container.innerHTML !== '') {
    hydrateRoot(container, page);
  } else {
    // Altrimenti creiamo un nuovo root (navigazione client-side)
    const root = createRoot(container);
    root.render(page);
  }
}
