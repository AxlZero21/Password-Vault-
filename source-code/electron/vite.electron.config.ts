import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Standalone SPA build used for the Electron package.
// Bypasses TanStack Start SSR — this app is entirely client-side.
export default defineConfig({
  root: path.resolve(__dirname),
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "..", "dist-electron-spa"),
    emptyOutDir: true,
  },
});
