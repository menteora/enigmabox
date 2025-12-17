
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Box } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';
import { NAV_LINKS, NAV_TEXT, getUrl } from '../constants';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chiude il menu mobile al cambio di percorso
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[#f9f7f2]/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-black/5 dark:border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href={getUrl('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Box className="w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-tight">{NAV_TEXT.logo}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${currentPath === link.href ? 'opacity-100 underline decoration-1 underline-offset-4' : 'opacity-70'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href={getUrl('/products')}>
            <Button size="sm">{NAV_TEXT.cta}</Button>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full min-h-screen bg-[#f9f7f2] dark:bg-zinc-950 border-b border-black/5 dark:border-white/5 p-6 flex flex-col gap-6 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-2xl font-serif font-medium py-2 border-b border-black/5 dark:border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a href={getUrl('/products')} className="w-full">
            <Button className="w-full mt-4" size="lg">{NAV_TEXT.cta}</Button>
          </a>
        </div>
      )}
    </nav>
  );
};
