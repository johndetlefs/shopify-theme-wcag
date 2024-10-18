import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import shopify from 'vite-plugin-shopify';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import nested from 'postcss-nested';

export default defineConfig({
  build: {
    minify: false, // Disables minification for easier debugging
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'], // Ensures Vite resolves these file types
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer, nested],
    },
  },
  plugins: [
    preact({}),
    shopify({
      versionNumbers: false,
    }), // Integrates Vite with Shopify
  ],
});
