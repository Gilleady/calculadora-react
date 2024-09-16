import { resolve } from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    outDir: 'docs', // Define a pasta de saída para o build
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // Define o arquivo de entrada
    }
  },
  base: '/calculadora-react/'
})
