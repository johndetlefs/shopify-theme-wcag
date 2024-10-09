import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import shopify from "vite-plugin-shopify";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react(), // This sets up React 19
    shopify(), // Integrates Vite with Shopify
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Enables Tailwind CSS
        autoprefixer(), // Adds vendor prefixes for compatibility
      ],
    },
  },
  build: {
    target: "es2015", // Ensures modern JavaScript compatibility
    outDir: "dist", // Outputs the built assets into the Shopify theme folder
    rollupOptions: {
      output: {
        // Ensures that React components are wrapped as Web Components properly
        format: "esm",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Simplifies imports by using '@' as alias for the 'src' directory
    },
  },
});
