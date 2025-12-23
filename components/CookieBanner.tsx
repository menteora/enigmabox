
import React, { useState } from 'react';
import { useCookies } from '../context/CookieContext';
import { Button } from './ui/Button';
import { Settings, ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { showBanner, acceptAll, rejectAll, saveCustomConsent } = useCookies();
  const [view, setView] = useState<'banner' | 'prefs'>('banner');
  const [analyticsPref, setAnalyticsPref] = useState(false);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 animate-fade-in-up">
      <div className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
        {view === 'banner' ? (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cream-100 dark:bg-zinc-800 rounded-lg text-amber-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold">Privacy & Cookie</h3>
              </div>
              <button onClick={rejectAll} className="p-1 opacity-40 hover:opacity-100 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm opacity-70 leading-relaxed">
              Utilizziamo i cookie per migliorare la tua esperienza e analizzare il traffico. Cliccando "Accetta tutto", acconsenti all'uso di Google Analytics. Puoi personalizzare o rifiutare in qualsiasi momento.
            </p>

            <div className="flex flex-col gap-3">
              <Button onClick={acceptAll} size="sm" className="w-full">Accetta tutto</Button>
              <div className="flex gap-3">
                <Button onClick={rejectAll} variant="outline" size="sm" className="flex-1">Solo tecnici</Button>
                <Button onClick={() => setView('prefs')} variant="ghost" size="sm" className="flex-1 gap-2">
                  <Settings className="w-4 h-4" /> Personalizza
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setView('banner')} className="text-xs font-medium underline opacity-50 hover:opacity-100 mb-2 block">Indietro</button>
            </div>
            <h3 className="font-serif text-xl font-bold">Impostazioni Cookie</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-cream-50 dark:bg-white/5 border border-black/5">
                <div>
                  <p className="text-sm font-bold">Cookie Tecnici</p>
                  <p className="text-xs opacity-50">Sempre attivi (necessari)</p>
                </div>
                <div className="w-10 h-5 bg-black/20 dark:bg-white/20 rounded-full relative">
                  <div className="absolute top-1 right-1 w-3 h-3 bg-white dark:bg-black rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-cream-50 dark:bg-white/5 border border-black/5">
                <div>
                  <p className="text-sm font-bold">Google Analytics</p>
                  <p className="text-xs opacity-50">Statistiche anonime</p>
                </div>
                <button 
                  onClick={() => setAnalyticsPref(!analyticsPref)}
                  className={`w-10 h-5 rounded-full relative transition-colors ${analyticsPref ? 'bg-amber-500' : 'bg-black/10 dark:bg-white/10'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white dark:bg-black rounded-full shadow-sm transition-all ${analyticsPref ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>

            <Button onClick={() => saveCustomConsent({ analytics: analyticsPref })} className="w-full">
              Salva preferenze
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
