import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Bootstrap's own SCSS still uses legacy @import internally; this
        // silences only that noise, not anything in our own partials, which
        // are @use/@forward-only.
        silenceDeprecations: [
          'import',
          'global-builtin',
          'color-functions',
          'if-function',
          'slash-div',
          'abs-percent',
        ],
      },
    },
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
