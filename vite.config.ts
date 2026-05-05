import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Repo serves at https://prakshal-jain.github.io/Portfolio/ — keep this in
// sync with the GitHub Pages URL. Change to "/" if you move to a custom domain
// (and add public/CNAME) or rename the repo to <username>.github.io.
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    target: "es2020",
  },
});
