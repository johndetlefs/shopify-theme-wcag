import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import shopify from 'vite-plugin-shopify';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  build: {
    minify: false, // Disables minification for easier debugging
    emptyOutDir: false, // Prevents Vite from clearing the dist directory on each build
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
    preact(),
    shopify({
      versionNumbers: false,
    }), // Integrates Vite with Shopify
  ],
});
