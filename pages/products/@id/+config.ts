
export default {
  // Disabilita il pre-rendering per questa rotta dinamica per evitare warning durante la build.
  // I dati del prodotto verranno risolti lato client tramite l'ID presente nell'URL.
  prerender: true,
};
