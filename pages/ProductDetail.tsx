
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { PRODUCTS } from '../constants';
import { Check, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';

interface ProductDetailProps {
  id?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Prodotto non trovato</h1>
          <a href="/products" className="underline">Torna al catalogo</a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <a href="/products" className="inline-flex items-center text-sm opacity-60 hover:opacity-100 mb-8 transition-opacity">
          <ArrowLeft className="w-4 h-4 mr-2" /> Torna al catalogo
        </a>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className={`aspect-square rounded-3xl ${product.imageColor} flex items-center justify-center relative overflow-hidden animate-fade-in-up`}>
            <span className="text-9xl font-serif opacity-10">{product.title.charAt(0)}</span>
          </div>

          <div className="flex flex-col justify-center animate-fade-in-up delay-100">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">{product.title}</h1>
            <div className="text-2xl font-mono opacity-80 mb-8">€{product.price.toFixed(2)}</div>
            
            <p className="text-lg opacity-70 leading-relaxed mb-8 border-b border-black/10 dark:border-white/10 pb-8">
              {product.description}
            </p>

            <div className="mb-10">
              <h3 className="font-serif text-lg mb-4">Cosa include:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 opacity-80">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full md:w-auto">
                Aggiungi al Carrello
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3 opacity-60">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs">Garanzia 100%</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <Truck className="w-5 h-5" />
                <span className="text-xs">Consegna Rapida</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProductDetail;
