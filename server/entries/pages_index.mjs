import { H as HERO_TEXT, g as getUrl, B as Button, E as EMOTIONS_TEXT, b as EMOTIONS, c as HOW_IT_WORKS_TEXT, S as STEPS, N as Navbar, d as HOME_CTA_TEXT, a as Footer, P as PageShell, i as import1 } from '../chunks/chunk-UveRrlGa.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ArrowRight } from 'lucide-react';
import import4 from 'vike-react/__internal/integration/Loading';
import 'react-dom/server';
import 'vike/server';
/* empty css                       */
import 'react';
import 'clsx';
import 'tailwind-merge';

/*! components/Hero.tsx [vike:pluginModuleBanner] */
const Hero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "container px-6 mx-auto flex flex-col items-center text-center z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider opacity-70", children: HERO_TEXT.badge })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 max-w-5xl animate-fade-in-up delay-100", children: [
        HERO_TEXT.titlePart1,
        " ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-black/40 dark:text-white/40", children: HERO_TEXT.titleAccent })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl opacity-70 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up delay-200", children: HERO_TEXT.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300", children: [
        /* @__PURE__ */ jsx("a", { href: getUrl("/products"), children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "group", children: [
          HERO_TEXT.ctaPrimary,
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: "#how-it-works", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", children: HERO_TEXT.ctaSecondary }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up delay-500 bg-neutral-200 dark:bg-neutral-800", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-stone-200 to-stone-100 dark:from-zinc-800 dark:to-zinc-700", children: /* @__PURE__ */ jsx("span", { className: "opacity-20 font-serif text-4xl italic", children: HERO_TEXT.imgPlaceholder }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl -z-10 pointer-events-none" })
  ] });
};

/*! components/EmotionsGrid.tsx [vike:pluginModuleBanner] */
const EmotionsGrid = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl mb-4", children: EMOTIONS_TEXT.title }),
      /* @__PURE__ */ jsx("p", { className: "opacity-60 max-w-xl mx-auto text-lg", children: EMOTIONS_TEXT.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: EMOTIONS.map((emotion) => {
      const Icon = emotion.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/10 hover:shadow-lg transition-all duration-300 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("div", { className: "p-4 rounded-full bg-[#f9f7f2] dark:bg-zinc-800 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm tracking-wide", children: emotion.label })
          ]
        },
        emotion.id
      );
    }) })
  ] }) });
};

/*! components/HowItWorks.tsx [vike:pluginModuleBanner] */
const HowItWorks = () => {
  return /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "py-24 px-6 bg-white dark:bg-zinc-900", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl mb-6", children: HOW_IT_WORKS_TEXT.sectionTitle }),
      /* @__PURE__ */ jsx("p", { className: "opacity-60 text-lg mb-12 leading-relaxed", children: HOW_IT_WORKS_TEXT.sectionDesc }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: STEPS.map((step, index) => {
        const Icon = step.icon;
        return /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#f9f7f2] dark:bg-zinc-800 flex items-center justify-center border border-black/5", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
            index !== STEPS.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-px h-full bg-black/5 dark:bg-white/5 mx-auto my-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif mb-2", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "opacity-60 leading-relaxed", children: step.description })
          ] })
        ] }, step.id);
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 dark:bg-zinc-800", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-stone-200 dark:bg-zinc-800", children: /* @__PURE__ */ jsx("span", { className: "opacity-30 font-serif text-2xl", children: HOW_IT_WORKS_TEXT.videoPlaceholder }) }) })
  ] }) }) });
};

/*! pages/Home.tsx [vike:pluginModuleBanner] */
const Home = () => {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(EmotionsGrid, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx("section", { className: "py-32 px-6 bg-[#f9f7f2] dark:bg-zinc-950 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-6xl mb-8", children: HOME_CTA_TEXT.title }),
      /* @__PURE__ */ jsx("p", { className: "text-xl opacity-70 mb-10 font-light", children: HOME_CTA_TEXT.subtitle }),
      /* @__PURE__ */ jsx("a", { href: getUrl("/products"), children: /* @__PURE__ */ jsx("button", { className: "bg-[#1a1a1a] text-white dark:bg-white dark:text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-xl cursor-pointer", children: HOME_CTA_TEXT.button }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

/*! pages/index/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  return /* @__PURE__ */ jsx(Home, {});
}

const import2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: 'Module' }));

/*! virtual:vike:page-entry:server:/pages/index [vike:pluginModuleBanner] */
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true,
    },
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: {"filePathToShowToUser":"/renderer/+onRenderHtml.tsx","fileExportPathToShowToUser":[]},
    valueSerialized: {
      type: "plus-file",
      exportValues: import1,
    },
  },
  ["Page"]: {
    type: "standard",
    definedAtData: {"filePathToShowToUser":"/pages/index/+Page.tsx","fileExportPathToShowToUser":[]},
    valueSerialized: {
      type: "plus-file",
      exportValues: import2,
    },
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{"filePathToShowToUser":"vike-react/config","fileExportPathToShowToUser":["default","passToClient"]}],
    valueSerialized: [ {
      type: "js-serialized",
      value: ["_configViaHook"],
    }, ],
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{"filePathToShowToUser":"/renderer/PageShell.tsx","fileExportPathToShowToUser":["PageShell"]}],
    valueSerialized: [ {
      type: "pointer-import",
      value: PageShell,
    }, ],
  },
  ["title"]: {
    type: "standard",
    definedAtData: {"filePathToShowToUser":"/renderer/+config.ts","fileExportPathToShowToUser":["default","title"]},
    valueSerialized: {
      type: "js-serialized",
      value: "Enigma Box - Regala un'emozione",
    },
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: {"filePathToShowToUser":"vike-react/__internal/integration/Loading","fileExportPathToShowToUser":[]},
    valueSerialized: {
      type: "pointer-import",
      value: import4,
    },
  },
};

export { configValuesSerialized };
