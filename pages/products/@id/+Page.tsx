
import React from 'react';
import ProductDetail from '../../ProductDetail';

type PageProps = {
  id?: string;
};

// Riceviamo l'id come pageProp valorizzato da onBeforeRender
export default function Page({ id }: PageProps) {
  return <ProductDetail id={id} />;
}
