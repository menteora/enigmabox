
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(`/products/${product.id}`)}
      className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left w-full"
    >
      <div className={`aspect-square w-full ${product.imageColor} relative flex items-center justify-center overflow-hidden`}>
        <div className="opacity-10 text-9xl font-serif transform group-hover:scale-110 transition-transform duration-500">
          {product.title.charAt(0)}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold">{product.title}</h3>
          <span className="font-mono text-sm opacity-60">€{product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm opacity-60 mb-6 flex-grow leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="flex items-center text-sm font-medium underline decoration-1 underline-offset-4 opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all">
          Scopri di più <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </button>
  );
};
