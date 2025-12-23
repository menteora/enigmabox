
import React, { createContext, useContext, useEffect, useState } from 'react';

export type CookieConsent = {
  analytics: boolean;
  timestamp: number;
};

interface CookieContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustomConsent: (prefs: { analytics: boolean }) => void;
  openPreferences: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const CONSENT_KEY = 'enigma_box_cookie_consent';
const CONSENT_EXPIRY = 180 * 24 * 60 * 60 * 1000; // 6 mesi in ms
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Inserire qui l'ID reale

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      const parsed: CookieConsent = JSON.parse(stored);
      const isExpired = Date.now() - parsed.timestamp > CONSENT_EXPIRY;
      if (isExpired) {
        setShowBanner(true);
      } else {
        setConsent(parsed);
        if (parsed.analytics) loadGA();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const loadGA = () => {
    if (typeof window === 'undefined' || document.getElementById('ga-script')) return;
    
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(inlineScript);
    console.log("[Cookie] Google Analytics caricato.");
  };

  const save = (analytics: boolean) => {
    const newConsent = { analytics, timestamp: Date.now() };
    setConsent(newConsent);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    if (analytics) loadGA();
  };

  return (
    <CookieContext.Provider value={{
      consent,
      showBanner,
      acceptAll: () => save(true),
      rejectAll: () => save(false),
      saveCustomConsent: (prefs) => save(prefs.analytics),
      openPreferences: () => setShowBanner(true)
    }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) throw new Error('useCookies must be used within a CookieProvider');
  return context;
};
