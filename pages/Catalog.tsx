import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Catalog: React.FC = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Header Catalogo */}
      <section className="bg-[#f9f7f2] dark:bg-zinc-900 py-20 px-6 border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-6 animate-fade-in-up">La Collezione</h1>
          <p className="text-lg opacity-60 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Scegli il contenitore perfetto per il tuo messaggio. Ogni scatola è lavorata a mano con cura per garantire un effetto sorpresa indimenticabile.
          </p>
        </div>
      </section>

      {/* Griglia Prodotti */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Catalog;