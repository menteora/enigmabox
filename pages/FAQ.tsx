import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FAQS } from '../constants';
import { MessageCircleQuestion } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-16 h-16 bg-[#f9f7f2] dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircleQuestion className="w-8 h-8 opacity-70" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Domande Frequenti</h1>
            <p className="text-lg opacity-60">
              Tutto ciò che devi sapere su Enigma Box, dalla creazione del messaggio alla spedizione.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up delay-100">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-black/5 dark:border-white/5 hover:border-black/10 transition-colors"
              >
                <h3 className="font-serif text-xl mb-3 font-medium">{faq.q}</h3>
                <p className="opacity-60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center opacity-60">
             <p>Non hai trovato la risposta che cercavi?</p>
             <a href="mailto:support@enigmabox.it" className="underline hover:text-black dark:hover:text-white transition-colors">Scrivici una email</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;