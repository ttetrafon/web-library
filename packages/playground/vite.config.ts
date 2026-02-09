import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@ttetrafon/core": path.resolve(__dirname, "../core/src"),
      "@ttetrafon/react": path.resolve(__dirname, "../react/src"),
    },
  },
});
