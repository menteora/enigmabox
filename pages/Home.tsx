
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EmotionsGrid } from '../components/EmotionsGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Footer } from '../components/Footer';
import { HOME_CTA_TEXT, IS_ONE_PAGE, PRODUCTS, FAQS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { MessageCircleQuestion } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="how-it-works">
        <EmotionsGrid />
        <HowItWorks />
      </div>

      {IS_ONE_PAGE && (
        <>
          <section id="products" className="py-24 px-6 bg-white dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">La Collezione</h2>
                <p className="text-lg opacity-60 max-w-2xl mx-auto">
                  Scegli il contenitore perfetto per il tuo messaggio. Ogni scatola è lavorata a mano con cura.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-16 h-16 bg-white/50 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircleQuestion className="w-8 h-8 opacity-70" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Domande Frequenti</h2>
              </div>
              <div className="space-y-6">
                {FAQS.map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-black/5 dark:border-white/5">
                    <h3 className="font-serif text-xl mb-3 font-medium">{faq.q}</h3>
                    <p className="opacity-60 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="py-32 px-6 bg-[#f9f7f2] dark:bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">{HOME_CTA_TEXT.title}</h2>
          <p className="text-xl opacity-70 mb-10 font-light">
            {HOME_CTA_TEXT.subtitle}
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#1a1a1a] text-white dark:bg-white dark:text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-xl cursor-pointer"
          >
            {HOME_CTA_TEXT.button}
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
