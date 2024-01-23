// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // As requisições para `/auth/*` serão encaminhadas para o servidor Express na porta 3000
      '/auth': 'http://localhost:3000'
    }
  }
});
