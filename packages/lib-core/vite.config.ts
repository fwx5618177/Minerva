import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      ...typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        declaration: true,
        declarationDir: path.resolve(__dirname, "dist"),
        rootDir: path.resolve(__dirname, "src"),
      }),
      apply: "build",
    },
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@platforms": path.resolve(__dirname, "src/platforms"),
      "@config": path.resolve(__dirname, "src/config"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
    },
  },
  build: {
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
        },
        entryFileNames: "index.[format].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        dir: "dist",
        exports: "named",
      },
    },
    cssCodeSplit: true,
    outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`,
        includePaths: [path.resolve(__dirname, "src/styles")],
      },
    },
  },
});
