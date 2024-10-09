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
        tailwindcss, // Enables Tailwind CSS
        autoprefixer, // Adds vendor prefixes for compatibility
      ],
    },
  },
  build: {
    minify: false, // Disables minification for easier debugging
    emptyOutDir: false, // Prevents Vite from deleting the `dist` directory
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // Ensures Vite resolves these file types
  },
});
