import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
    // Compressão gzip e brotli
    compression({
      algorithms: ['gzip'],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithms: ['brotliCompress'],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    // Analisador de bundle (apenas em build)
    mode === 'production' && visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('embla-carousel')) {
              return 'carousel-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('@tanstack/react-query') || id.includes('sonner') || id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
          
          // Component chunks por funcionalidade
          if (id.includes('/pages/')) {
            if (id.includes('PrivacyPolicy') || id.includes('CookiePolicy') || id.includes('TermsOfUse')) {
              return 'legal-pages';
            }
            if (id.includes('About') || id.includes('Services') || id.includes('Contact')) {
              return 'info-pages';
            }
            return 'pages';
          }
          
          if (id.includes('/components/')) {
            if (id.includes('Carousel') || id.includes('OptimizedImage')) {
              return 'carousel-components';
            }
            if (id.includes('Chatbot') || id.includes('Toast')) {
              return 'interactive-components';
            }
            if (id.includes('Policy') || id.includes('Cookie')) {
              return 'legal-components';
            }
            return 'components';
          }
        },
        // Otimizar nomes de arquivos
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  // Otimizações de dependências
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@tanstack/react-query',
      'lucide-react',
      'embla-carousel-react',
      'sonner'
    ],
    exclude: [
      // Excluir dependências que devem ser carregadas dinamicamente
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true
      }
    }
  },
  
  // Configurações adicionais para otimização
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
    treeShaking: true
  }
}));
