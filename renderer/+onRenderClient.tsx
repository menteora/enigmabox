
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from 'vike/types';

export async function onRenderClient(pageContext: PageContextClient) {
  // Fixed: Cast pageContext to any to access Page and pageProps which are added by Vike at runtime
  const { Page, pageProps } = pageContext as any;
  const container = document.getElementById('page-view');
  if (container) {
    hydrateRoot(
      container,
      <PageShell>
        <Page {...pageProps} />
      </PageShell>
    );
  }
}