import React from 'react';
import { Box, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Box className="w-6 h-6" />
            <span className="font-serif text-xl font-bold">Enigma Box</span>
          </div>
          <p className="opacity-60 max-w-sm mb-8 font-light">
            Regala un'emozione che dura per sempre. Il modo più originale per dire ciò che provi.
          </p>
          <div className="flex gap-4 opacity-60">
            <Instagram className="w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
            <Facebook className="w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
            <Mail className="w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Link Utili</h4>
          <ul className="space-y-4 opacity-60 font-light">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Chi siamo</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Contatti</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Spedizioni</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Resi</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Legale</h4>
          <ul className="space-y-4 opacity-60 font-light">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Termini e Condizioni</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center opacity-40 text-sm">
        © {new Date().getFullYear()} Enigma Box. Tutti i diritti riservati.
      </div>
    </footer>
  );
};