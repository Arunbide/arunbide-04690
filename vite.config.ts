import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages serves this repository beneath /arunbide-04690/. Local builds
  // and preview deployments remain available from the domain root.
  base: mode === "production" && process.env.GITHUB_ACTIONS ? "/arunbide-04690/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
