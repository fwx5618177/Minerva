import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isLibBuild = process.env.BUILD_TARGET === "lib";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@platforms": path.resolve(__dirname, "src/platforms"),
      "@config": path.resolve(__dirname, "config"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
    },
  },
  build: isLibBuild
    ? {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "MinervaComponentLibrary",
          fileName: (format) => `minerva-component-library.${format}.js`,
          formats: ["es", "cjs"],
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "react-native": "ReactNative",
              electron: "Electron",
              "@tauri-apps/api": "Tauri",
            },
            dir: "lib",
            format: "esm",
          },
        },
      }
    : {
        outDir: "dist",
        rollupOptions: {
          input: path.resolve(__dirname, "index.html"),
        },
      },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`,
        includePaths: [path.resolve(__dirname, "src/styles")],
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: "127.0.0.1",
  },
});
