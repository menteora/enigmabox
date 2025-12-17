import { g as getUrl, N as Navbar, e as PRODUCTS, a as Footer, P as PageShell, i as import1 } from '../chunks/chunk-UveRrlGa.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ArrowRight } from 'lucide-react';
import import4 from 'vike-react/__internal/integration/Loading';
import 'react-dom/server';
import 'vike/server';
/* empty css                       */
import 'react';
import 'clsx';
import 'tailwind-merge';

/*! components/ProductCard.tsx [vike:pluginModuleBanner] */
const ProductCard = ({ product }) => {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: getUrl(`/products/${product.id}`),
      className: "group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsx("div", { className: `aspect-square w-full ${product.imageColor} relative flex items-center justify-center overflow-hidden`, children: /* @__PURE__ */ jsx("div", { className: "opacity-10 text-9xl font-serif transform group-hover:scale-110 transition-transform duration-500", children: product.title.charAt(0) }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold", children: product.title }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-sm opacity-60", children: [
              "€",
              product.price.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm opacity-60 mb-6 flex-grow leading-relaxed", children: product.shortDescription }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm font-medium underline decoration-1 underline-offset-4 opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all", children: [
            "Scopri di più ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
          ] })
        ] })
      ]
    }
  );
};

/*! pages/Catalog.tsx [vike:pluginModuleBanner] */
const Catalog = () => {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f9f7f2] dark:bg-zinc-900 py-20 px-6 border-b border-black/5 dark:border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl md:text-6xl mb-6 animate-fade-in-up", children: "La Collezione" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg opacity-60 max-w-2xl mx-auto animate-fade-in-up delay-100", children: "Scegli il contenitore perfetto per il tuo messaggio. Ogni scatola è lavorata a mano con cura per garantire un effetto sorpresa indimenticabile." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: PRODUCTS.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id)) }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

/*! pages/products/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  return /* @__PURE__ */ jsx(Catalog, {});
}

const import2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: 'Module' }));

/*! virtual:vike:page-entry:server:/pages/products [vike:pluginModuleBanner] */
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
    definedAtData: {"filePathToShowToUser":"/pages/products/+Page.tsx","fileExportPathToShowToUser":[]},
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
