import React from 'react';
import { STEPS, HOW_IT_WORKS_TEXT } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">{HOW_IT_WORKS_TEXT.sectionTitle}</h2>
            <p className="opacity-60 text-lg mb-12 leading-relaxed">
              {HOW_IT_WORKS_TEXT.sectionDesc}
            </p>

            <div className="space-y-12">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#f9f7f2] dark:bg-zinc-800 flex items-center justify-center border border-black/5">
                        <Icon className="w-5 h-5" />
                      </div>
                      {index !== STEPS.length - 1 && (
                        <div className="w-px h-full bg-black/5 dark:bg-white/5 mx-auto my-2" />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                      <p className="opacity-60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 dark:bg-zinc-800">
             <div className="absolute inset-0 flex items-center justify-center bg-stone-200 dark:bg-zinc-800">
                <span className="opacity-30 font-serif text-2xl">{HOW_IT_WORKS_TEXT.videoPlaceholder}</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};