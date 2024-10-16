import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import shopify from "vite-plugin-shopify";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
// import string from 'vite-plugin-string';
// import visualizer from 'vite-bundle-analyzer'

export default defineConfig({
  build: {
    minify: false, // Disables minification for easier debugging
    emptyOutDir: false, // Prevents Vite from clearing the dist directory on each build
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // Ensures Vite resolves these file types
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    react(), // This sets up React 19
    shopify({
      versionNumbers: false
    }), // Integrates Vite with Shopify
    // string(),
    // visualizer(),
  ]
});
