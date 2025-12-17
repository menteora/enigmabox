import { jsx, jsxs } from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
/* empty css               */
import { createContext, useState, useEffect, useContext } from 'react';
import { Sparkles, Heart, HandHeart, Feather, Clock, Hourglass, Gift, MessageSquareText, ScanQrCode, Box, Sun, Moon, X, Menu, Instagram, Facebook, Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/*! context/ThemeContext.tsx [vike:pluginModuleBanner] */
const ThemeContext = createContext(void 0);
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (storedTheme === "dark" || !storedTheme && prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (typeof window !== "undefined") {
        if (newTheme) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }
      return newTheme;
    });
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { isDark, toggleTheme }, children });
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/*! renderer/PageShell.tsx [vike:pluginModuleBanner] */
const PageShell = ({ children }) => {
  return /* @__PURE__ */ jsx(ThemeProvider, { children });
};

/*! renderer/+onRenderHtml.tsx [vike:pluginModuleBanner] */
async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToStaticMarkup(
    /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const configTitle = pageContext.config?.title;
  const titleString = (typeof configTitle === "function" ? configTitle(pageContext) : configTitle) || "Enigma Box";
  return escapeInject`<!DOCTYPE html>
    <html lang="it">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/%3E%3Cpolyline points='3.27 6.96 12 12.01 20.73 6.96'/%3E%3Cline x1='12' y1='22.08' x2='12' y2='12'/%3E%3C/svg%3E" />
        <title>${titleString}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}

const import1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: 'Module' }));

/*! components/ui/Button.tsx [vike:pluginModuleBanner] */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Button = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    primary: "bg-[#1a1a1a] text-white hover:bg-[#333333] dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-md",
    outline: "border border-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
    ghost: "hover:bg-black/5 dark:hover:bg-white/10 text-[#1a1a1a] dark:text-white"
  };
  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-8 text-sm",
    lg: "h-14 px-10 text-base"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(baseStyles, variants[variant], sizes[size], className),
      ...props,
      children
    }
  );
};

/*! constants.tsx [vike:pluginModuleBanner] */
const BASE_URL = "";
const NAV_LINKS = [
  { label: "Home", href: `${BASE_URL}/` },
  { label: "Le Enigma Box", href: `${BASE_URL}/products` },
  { label: "FAQ", href: `${BASE_URL}/faq` }
];
const NAV_TEXT = {
  logo: "Enigma Box",
  cta: "Acquista Ora"
};
const PRODUCTS = [
  {
    id: "box-classica",
    title: "Enigma Classic",
    price: 49,
    shortDescription: "L'eleganza senza tempo per ogni occasione.",
    description: "La Enigma Classic è il punto di partenza perfetto. Realizzata in cartone pregiato con finiture in oro a caldo, questa scatola è ideale per custodire messaggi di affetto, auguri di compleanno o semplici pensieri che meritano di essere ricordati.",
    imageColor: "bg-stone-200 dark:bg-stone-800",
    features: ["QR Code personalizzato", "Messaggio audio/video fino a 2min", "Materiali riciclabili premium"]
  },
  {
    id: "box-wood",
    title: "Wood Edition",
    price: 89,
    shortDescription: "Calore naturale e artigianalità per momenti preziosi.",
    description: "Intagliata in legno di noce sostenibile, la Wood Edition è pensata per durare nel tempo. Una vera e propria cassaforte di ricordi che diventa un complemento d'arredo. Perfetta per anniversari e matrimoni.",
    imageColor: "bg-amber-200 dark:bg-amber-900",
    features: ["Legno massello", "Incisione personalizzata", "Messaggio video 4K illimitato", "Accesso prioritario al cloud"]
  },
  {
    id: "box-midnight",
    title: "Midnight Mystery",
    price: 65,
    shortDescription: "Un tocco di mistero con finiture nere opache.",
    description: "Per chi ama il design moderno e minimale. La Midnight Mystery si presenta con una finitura soft-touch nera profonda e dettagli lucidi. Ideale per sorprese intriganti e rivelazioni inaspettate.",
    imageColor: "bg-slate-800 dark:bg-black",
    features: ["Finitura Soft-Touch", "QR Code invisibile (UV)", "Supporto Realtà Aumentata"]
  }
];
const getUrl = (path) => `${BASE_URL}${path.startsWith("/") ? path : "/" + path}`;
const HERO_TEXT = {
  badge: "Nuova Collezione Disponibile",
  titlePart1: "Un enigma, un'emozione,",
  titleAccent: "un ricordo eterno.",
  description: "Non è solo un regalo, è un'esperienza. Racchiudi i tuoi sentimenti più profondi in una scatola enigmatica che rivela il suo segreto solo a chi possiede la chiave del cuore.",
  ctaPrimary: "Crea la tua Enigma Box",
  ctaSecondary: "Scopri come funziona",
  imgPlaceholder: "Immagine Enigma Box"
};
const EMOTIONS_TEXT = {
  title: "Scegli la tua emozione",
  subtitle: "Ogni box è pensata per un momento specifico della vita. Quale storia vuoi raccontare oggi?"
};
const EMOTIONS = [
  { id: "1", label: "Celebra", icon: Sparkles },
  { id: "2", label: "Grazie", icon: Heart },
  { id: "3", label: "Ti sono vicino", icon: HandHeart },
  { id: "4", label: "Coraggio", icon: Feather },
  { id: "5", label: "Ricordi", icon: Clock },
  { id: "6", label: "Ricominciamo", icon: Hourglass }
];
const HOW_IT_WORKS_TEXT = {
  sectionTitle: "Come funziona la magia",
  sectionDesc: "Abbiamo reso semplice creare un momento indimenticabile. In pochi passi, trasformerai un semplice pensiero in un'esperienza tangibile e misteriosa.",
  videoPlaceholder: "Video Tutorial"
};
const STEPS = [
  {
    id: "step-1",
    title: "Personalizza",
    description: "Scegli per chi è l'emozione e lo stile.",
    icon: Gift
  },
  {
    id: "step-2",
    title: "Inserisci il messaggio",
    description: "Carica un video, audio o dedica (anche dopo l'ordine).",
    icon: MessageSquareText
  },
  {
    id: "step-3",
    title: "Consegna l'Enigma",
    description: "Loro scansionano il QR e scoprono il messaggio.",
    icon: ScanQrCode
  }
];
const HOME_CTA_TEXT = {
  title: "Pronto a stupire?",
  subtitle: "Non aspettare un'occasione speciale. Rendilo speciale tu.",
  button: "Acquista la tua Enigma Box"
};
const FAQS = [
  {
    q: "Come carico il mio messaggio?",
    a: "Dopo l'acquisto riceverai un link via email. Potrai caricare video, foto o testo quando vuoi, anche dopo che la scatola è stata spedita."
  },
  {
    q: "Il destinatario vede il messaggio subito?",
    a: "No! Il destinatario vedrà solo un bellissimo QR code. Dovrà scansionarlo per rivelare il contenuto segreto."
  },
  {
    q: "Posso cambiare il messaggio dopo?",
    a: "Sì, hai 24 ore di tempo dalla prima scansione per modificare il contenuto, oppure puoi acquistare l'opzione 'Messaggio Dinamico' per cambiarlo sempre."
  },
  {
    q: "Quali sono i tempi di spedizione?",
    a: "Spediamo in 24/48 ore lavorative in tutta Italia."
  }
];
const FOOTER_TEXT = {
  brandDesc: "Regala un'emozione che dura per sempre. Il modo più originale per dire ciò che provi.",
  copyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} Enigma Box. Tutti i diritti riservati.`,
  columns: {
    useful: {
      title: "Link Utili",
      links: [
        { label: "Home", href: `${BASE_URL}/` },
        { label: "Le Box", href: `${BASE_URL}/products` },
        { label: "FAQ", href: `${BASE_URL}/faq` }
      ]
    },
    legal: {
      title: "Legale",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Termini e Condizioni", href: "#" }
      ]
    }
  }
};

/*! components/Navbar.tsx [vike:pluginModuleBanner] */
const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-[#f9f7f2]/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-black/5 dark:border-white/5" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: getUrl("/"), className: "flex items-center gap-2 hover:opacity-80 transition-opacity", children: [
            /* @__PURE__ */ jsx(Box, { className: "w-6 h-6" }),
            /* @__PURE__ */ jsx("span", { className: "font-serif text-xl font-bold tracking-tight", children: NAV_TEXT.logo })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-8", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: `text-sm font-medium hover:opacity-70 transition-opacity ${currentPath === link.href ? "opacity-100 underline decoration-1 underline-offset-4" : "opacity-70"}`,
              children: link.label
            },
            link.label
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                className: "p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
                "aria-label": "Toggle theme",
                children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Moon, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsx("a", { href: getUrl("/products"), children: /* @__PURE__ */ jsx(Button, { size: "sm", children: NAV_TEXT.cta }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("button", { onClick: toggleTheme, className: "p-2", children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Moon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" }) })
          ] })
        ] }),
        isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden absolute top-20 left-0 w-full min-h-screen bg-[#f9f7f2] dark:bg-zinc-950 border-b border-black/5 dark:border-white/5 p-6 flex flex-col gap-6 shadow-xl", children: [
          NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: "text-2xl font-serif font-medium py-2 border-b border-black/5 dark:border-white/5",
              children: link.label
            },
            link.label
          )),
          /* @__PURE__ */ jsx("a", { href: getUrl("/products"), className: "w-full", children: /* @__PURE__ */ jsx(Button, { className: "w-full mt-4", size: "lg", children: NAV_TEXT.cta }) })
        ] })
      ]
    }
  );
};

/*! components/Footer.tsx [vike:pluginModuleBanner] */
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#1a1a1a] text-white py-16 px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ jsx(Box, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("span", { className: "font-serif text-xl font-bold", children: NAV_TEXT.logo })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "opacity-60 max-w-sm mb-8 font-light", children: FOOTER_TEXT.brandDesc }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 opacity-60", children: [
          /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" }),
          /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" }),
          /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 hover:opacity-100 hover:text-white cursor-pointer transition-all" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg mb-6", children: FOOTER_TEXT.columns.useful.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 opacity-60 font-light", children: FOOTER_TEXT.columns.useful.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, className: "hover:opacity-100 transition-opacity", children: link.label }) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg mb-6", children: FOOTER_TEXT.columns.legal.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 opacity-60 font-light", children: FOOTER_TEXT.columns.legal.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, className: "hover:opacity-100 transition-opacity", children: link.label }) }, link.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center opacity-40 text-sm", children: FOOTER_TEXT.copyright })
  ] });
};

export { Button as B, EMOTIONS_TEXT as E, FAQS as F, HERO_TEXT as H, Navbar as N, PageShell as P, STEPS as S, Footer as a, EMOTIONS as b, HOW_IT_WORKS_TEXT as c, HOME_CTA_TEXT as d, PRODUCTS as e, getUrl as g, import1 as i };
