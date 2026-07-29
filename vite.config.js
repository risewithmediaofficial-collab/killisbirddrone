import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: '.',
  publicDir: 'public',

  plugins: [react()],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,     // uses Oxc (Vite 8 default) — faster than esbuild
    cssCodeSplit: true,
    sourcemap: false,
    // Inline assets smaller than 4 KB as base64 (saves HTTP round-trips)
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Keep each vendor in its own cached chunk
        manualChunks(id) {
          // React core
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // Framer Motion
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          // GSAP + ScrollTrigger
          if (id.includes('node_modules/gsap')) {
            return 'vendor-gsap';
          }
          // MUI (large — split from everything else)
          if (
            id.includes('node_modules/@mui') ||
            id.includes('node_modules/@emotion')
          ) {
            return 'vendor-mui';
          }
          // Lenis smooth scroll
          if (id.includes('node_modules/lenis')) {
            return 'vendor-lenis';
          }
          // React Helmet
          if (id.includes('node_modules/react-helmet')) {
            return 'vendor-helmet';
          }
        },

        // Stable filenames for long-term caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})


