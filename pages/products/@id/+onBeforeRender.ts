import type { PageContextBuiltIn } from 'vike/types';

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const idFromRoute = (pageContext.routeParams as { id?: string } | undefined)?.id;
  const idFromUrl = pageContext.urlPathname?.split('/').filter(Boolean).pop();
  const id = idFromRoute || idFromUrl;

  return {
    pageContext: {
      pageProps: { id },
    },
  };
}
