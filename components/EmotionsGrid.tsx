import React from 'react';
import { EMOTIONS, EMOTIONS_TEXT } from '../constants';

export const EmotionsGrid: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{EMOTIONS_TEXT.title}</h2>
          <p className="opacity-60 max-w-xl mx-auto text-lg">
            {EMOTIONS_TEXT.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {EMOTIONS.map((emotion) => {
            const Icon = emotion.icon;
            return (
              <div 
                key={emotion.id}
                className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-4 rounded-full bg-[#f9f7f2] dark:bg-zinc-800 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="font-medium text-sm tracking-wide">{emotion.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};