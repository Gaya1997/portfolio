// @ts-nocheck
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: env.VITE_REACT_APP_BASE_PATH || "/",
    server: {
      host: "0.0.0.0",
      open: true,
      port: 3000,
    },
    plugins: [react(), tailwindcss(), svgr()],
  };
});
