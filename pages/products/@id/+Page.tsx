
import React from 'react';
import ProductDetail from '../../ProductDetail';
import { usePageContext } from 'vike-react/usePageContext';

export default function Page() {
  const pageContext = usePageContext();
  const { id } = pageContext.routeParams;
  
  // Passiamo l'id come prop per evitare dipendenze da react-router-dom in ambiente Vike
  return <ProductDetail id={id} />;
}
