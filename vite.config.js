import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { DOMElements, SVGElements } from "solid-js/web/dist/dev.cjs";
import inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    inspect(),
    solidPlugin({
      solid: {
        moduleName: "solid-js/web",
        generate: "dynamic",
        renderers: [
          {
            name: "dom",
            moduleName: "solid-js/web",
            elements: [...DOMElements.values(), ...SVGElements.values()],
          },
          {
            name: "universal",
            moduleName: "solid-three",
            elements: [],
          },
        ],
      },
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
