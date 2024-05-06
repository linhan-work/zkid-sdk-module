import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "zkidSdkModule",
      fileName: (format) => `zkid-sdk-module.${format}.js`,
    }
  },
});
