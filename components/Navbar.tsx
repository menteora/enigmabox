
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Box } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';
import { NAV_TEXT, NAV_LINKS, IS_ONE_PAGE } from '../constants';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (IS_ONE_PAGE && (location.pathname === '/' || location.pathname === '')) {
        const sections = ['home', 'products', 'faq'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [IS_ONE_PAGE, location.pathname]);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (IS_ONE_PAGE) {
      const sectionId = href === '/' ? 'home' : href.replace('/', '');
      const el = document.getElementById(sectionId);
      
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      } else {
        // Se non siamo in home (es. pagina dettaglio), torniamo in home e poi scrolliamo
        navigate('/');
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }, 150);
      }
    } else {
      navigate(href);
    }
  };

  const isActive = (href: string) => {
    if (IS_ONE_PAGE && (location.pathname === '/' || location.pathname === '')) {
      const sectionId = href === '/' ? 'home' : href.replace('/', '');
      return activeSection === sectionId;
    }
    return location.pathname === href;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[#f9f7f2]/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-black/5 dark:border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={(e) => handleNav(e, '/')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Box className="w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-tight">{NAV_TEXT.logo}</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={(e) => handleNav(e, link.href)}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${isActive(link.href) ? 'opacity-100 underline decoration-1 underline-offset-4' : 'opacity-70'}`}
            >
              {link.label}
            </button>
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
          <Button size="sm" onClick={(e) => handleNav(e, '/products')}>{NAV_TEXT.cta}</Button>
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
            <button 
              key={link.label} 
              onClick={(e) => handleNav(e, link.href)}
              className={`text-2xl font-serif font-medium py-2 border-b border-black/5 dark:border-white/5 text-left ${isActive(link.href) ? 'opacity-100' : 'opacity-50'}`}
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full mt-4" size="lg" onClick={(e) => handleNav(e, '/products')}>{NAV_TEXT.cta}</Button>
        </div>
      )}
    </nav>
  );
};
