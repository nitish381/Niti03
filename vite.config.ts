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
        // Bootstrap 5.3 still ships `@import`-based partials. Our own SCSS is
        // fully `@use`/`@forward`; these silence the noise coming from inside
        // node_modules/bootstrap only.
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
          vendor: ['react', 'react-dom'],
          bootstrap: ['react-bootstrap'],
        },
      },
    },
  },
});
