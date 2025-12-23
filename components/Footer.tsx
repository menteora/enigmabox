
import React from 'react';
import { Box, Instagram, Facebook, Mail } from 'lucide-react';
import { FOOTER_TEXT, NAV_TEXT } from '../constants';
import { useCookies } from '../context/CookieContext';

export const Footer: React.FC = () => {
  const { openPreferences } = useCookies();

  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Box className="w-6 h-6" />
            <span className="font-serif text-xl font-bold">{NAV_TEXT.logo}</span>
          </div>
          <p className="opacity-60 max-w-sm mb-8 font-light">
            {FOOTER_TEXT.brandDesc}
          </p>
          <div className="flex gap-4 opacity-60">
            <Instagram className="w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
            <Facebook className="w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
            <Mail className="w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">{FOOTER_TEXT.columns.useful.title}</h4>
          <ul className="space-y-4 opacity-60 font-light">
            {FOOTER_TEXT.columns.useful.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:opacity-100 transition-opacity">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">{FOOTER_TEXT.columns.legal.title}</h4>
          <ul className="space-y-4 opacity-60 font-light text-sm">
            {FOOTER_TEXT.columns.legal.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:opacity-100 transition-opacity">{link.label}</a>
              </li>
            ))}
            <li>
              <button 
                onClick={openPreferences}
                className="hover:opacity-100 transition-opacity cursor-pointer text-left"
              >
                Preferenze Cookie
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center opacity-40 text-sm">
        {FOOTER_TEXT.copyright}
      </div>
    </footer>
  );
};
