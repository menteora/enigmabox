import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container px-6 mx-auto flex flex-col items-center text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-wider opacity-70">Nuova Collezione Disponibile</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 max-w-5xl animate-fade-in-up delay-100">
          Un enigma, un'emozione, <br />
          <span className="italic text-black/40 dark:text-white/40">un ricordo eterno.</span>
        </h1>

        <p className="text-lg md:text-xl opacity-70 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Non è solo un regalo, è un'esperienza. Racchiudi i tuoi sentimenti più profondi in una scatola enigmatica che rivela il suo segreto solo a chi possiede la chiave del cuore.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
          <Button size="lg" className="group">
            Crea la tua Enigma Box
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Scopri come funziona
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up delay-500 bg-neutral-200 dark:bg-neutral-800">
          {/* Placeholder for Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-stone-200 to-stone-100 dark:from-zinc-800 dark:to-zinc-700">
            <span className="opacity-20 font-serif text-4xl italic">Immagine Enigma Box</span>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
};