import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import shopify from "vite-plugin-shopify";

export default defineConfig({
  plugins: [
    react(), // This sets up React 19
    shopify({
      versionNumbers: false
    }), // Integrates Vite with Shopify
  ],
  build: {
    minify: false, // Disables minification for easier debugging
    emptyOutDir: false, // Prevents Vite from deleting the `dist` directory
    
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // Ensures Vite resolves these file types
  },
});
