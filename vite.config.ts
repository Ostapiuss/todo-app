import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@shared': '/src/shared',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@api': '/src/api',
    },
  },
  server: {
    port: 3000,
  },
});
