import { N as Navbar, F as FAQS, a as Footer, P as PageShell, i as import1 } from '../chunks/chunk-UveRrlGa.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { MessageCircleQuestion } from 'lucide-react';
import import4 from 'vike-react/__internal/integration/Loading';
import 'react-dom/server';
import 'vike/server';
/* empty css                       */
import 'react';
import 'clsx';
import 'tailwind-merge';

/*! pages/FAQ.tsx [vike:pluginModuleBanner] */
const FAQ = () => {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-in-up", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[#f9f7f2] dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(MessageCircleQuestion, { className: "w-8 h-8 opacity-70" }) }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl md:text-5xl mb-6", children: "Domande Frequenti" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg opacity-60", children: "Tutto ciò che devi sapere su Enigma Box, dalla creazione del messaggio alla spedizione." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 animate-fade-in-up delay-100", children: FAQS.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white dark:bg-white/5 rounded-2xl p-8 border border-black/5 dark:border-white/5 hover:border-black/10 transition-colors",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl mb-3 font-medium", children: faq.q }),
            /* @__PURE__ */ jsx("p", { className: "opacity-60 leading-relaxed", children: faq.a })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 text-center opacity-60", children: [
        /* @__PURE__ */ jsx("p", { children: "Non hai trovato la risposta che cercavi?" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:support@enigmabox.it", className: "underline hover:text-black dark:hover:text-white transition-colors", children: "Scrivici una email" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

/*! pages/faq/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  return /* @__PURE__ */ jsx(FAQ, {});
}

const import2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: 'Module' }));

/*! virtual:vike:page-entry:server:/pages/faq [vike:pluginModuleBanner] */
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
    definedAtData: {"filePathToShowToUser":"/pages/faq/+Page.tsx","fileExportPathToShowToUser":[]},
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
