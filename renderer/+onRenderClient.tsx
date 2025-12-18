import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from 'vike/types';

export async function onRenderClient(pageContext: PageContextClient) {
  console.log("[vike] onRenderClient started", { 
    isHydration: pageContext.isHydration,
    urlOriginal: pageContext.urlOriginal 
  });

  const { Page, pageProps } = pageContext as any;
  const container = document.getElementById('page-view');
  
  if (!container) {
    console.error('[vike] Elemento #page-view non trovato nel DOM.');
    return;
  }

  const page = (
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  );

  try {
    if (pageContext.isHydration && container.innerHTML !== '') {
      console.log("[vike] Hydrating root...");
      hydrateRoot(container, page);
      console.log("[vike] Hydration complete");
    } else {
      console.log("[vike] Creating new root (client-side navigation)...");
      const root = createRoot(container);
      root.render(page);
      console.log("[vike] Render complete");
    }
  } catch (err) {
    console.error("[vike] Error during rendering:", err);
  }
}