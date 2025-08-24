import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5173
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React e bibliotecas relacionadas
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Separar UI libraries (apenas as que estão instaladas)
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-slot', '@radix-ui/react-select', '@radix-ui/react-toast'],
          // Separar query e state management
          'query-vendor': ['@tanstack/react-query'],
          // Separar utilitários
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          // Separar ícones
          'icons-vendor': ['lucide-react'],
          // Separar outras bibliotecas
          'motion-vendor': ['framer-motion'],
          'carousel-vendor': ['embla-carousel-react'],
        },
      },
    },
    // Copiar arquivos adicionais para o build
    copyPublicDir: true,
  },

}));
