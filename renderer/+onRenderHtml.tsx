
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { PageShell } from './PageShell';
import type { PageContextServer } from 'vike/types';

export async function onRenderHtml(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext as any;
  
  const pageHtml = renderToStaticMarkup(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  );

  const configTitle = (pageContext as any).config?.title;
  const titleString = (typeof configTitle === 'function' ? configTitle(pageContext) : configTitle) || 'Enigma Box';
  
  return escapeInject`<!DOCTYPE html>
    <html lang="it">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/%3E%3Cpolyline points='3.27 6.96 12 12.01 20.73 6.96'/%3E%3Cline x1='12' y1='22.08' x2='12' y2='12'/%3E%3C/svg%3E" />
        <title>${titleString as string}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
