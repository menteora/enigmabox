
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EmotionsGrid } from '../components/EmotionsGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Footer } from '../components/Footer';
import { HOME_CTA_TEXT, getUrl } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <EmotionsGrid />
      <HowItWorks />
      <section className="py-32 px-6 bg-[#f9f7f2] dark:bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">{HOME_CTA_TEXT.title}</h2>
          <p className="text-xl opacity-70 mb-10 font-light">
            {HOME_CTA_TEXT.subtitle}
          </p>
          <a href={getUrl('/products')}>
            <button className="bg-[#1a1a1a] text-white dark:bg-white dark:text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-xl cursor-pointer">
              {HOME_CTA_TEXT.button}
            </button>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
