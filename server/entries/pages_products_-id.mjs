import { e as PRODUCTS, g as getUrl, N as Navbar, B as Button, a as Footer, P as PageShell, i as import1 } from '../chunks/chunk-UveRrlGa.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ArrowLeft, Check, ShieldCheck, Truck } from 'lucide-react';
import { usePageContext } from 'vike-react/usePageContext';
import import4 from 'vike-react/__internal/integration/Loading';
import 'react-dom/server';
import 'vike/server';
/* empty css                       */
import 'react';
import 'clsx';
import 'tailwind-merge';

/*! pages/ProductDetail.tsx [vike:pluginModuleBanner] */
const ProductDetail = ({ id }) => {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-serif mb-4", children: "Prodotto non trovato" }),
      /* @__PURE__ */ jsx("a", { href: getUrl("/products"), className: "underline", children: "Torna al catalogo" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-12", children: [
      /* @__PURE__ */ jsxs("a", { href: getUrl("/products"), className: "inline-flex items-center text-sm opacity-60 hover:opacity-100 mb-8 transition-opacity", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
        " Torna al catalogo"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsx("div", { className: `aspect-square rounded-3xl ${product.imageColor} flex items-center justify-center relative overflow-hidden animate-fade-in-up`, children: /* @__PURE__ */ jsx("span", { className: "text-9xl font-serif opacity-10", children: product.title.charAt(0) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center animate-fade-in-up delay-100", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl md:text-5xl mb-4", children: product.title }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-mono opacity-80 mb-8", children: [
            "€",
            product.price.toFixed(2)
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg opacity-70 leading-relaxed mb-8 border-b border-black/10 dark:border-white/10 pb-8", children: product.description }),
          /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg mb-4", children: "Cosa include:" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: product.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 opacity-80", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-green-600 dark:text-green-400" }) }),
              feature
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "w-full md:w-auto", children: "Aggiungi al Carrello" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-black/10 dark:border-white/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 opacity-60", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Garanzia 100%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 opacity-60", children: [
              /* @__PURE__ */ jsx(Truck, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Consegna Rapida" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

/*! pages/products/@id/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  const pageContext = usePageContext();
  const { id } = pageContext.routeParams;
  return /* @__PURE__ */ jsx(ProductDetail, { id });
}

const import2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: 'Module' }));

/*! virtual:vike:page-entry:server:/pages/products/@id [vike:pluginModuleBanner] */
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
    definedAtData: {"filePathToShowToUser":"/pages/products/@id/+Page.tsx","fileExportPathToShowToUser":[]},
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
