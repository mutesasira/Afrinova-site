import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["jquery"], // Ensure Vite doesn't optimize or alter jQuery
    },
  },
});
