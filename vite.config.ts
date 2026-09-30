import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Custom domain (www.neringaval.com), not a github.io repo subpath.
  base: "/",
  plugins: [react(), tailwindcss()],
});
