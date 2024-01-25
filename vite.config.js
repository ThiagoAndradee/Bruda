// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
config(); // Isso substitui require('dotenv').config();

console.log('bielom o proxy auth no vite config é:',process.env.PROXY_AUTH)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // As requisições para `/auth/*` serão encaminhadas para o servidor Express na porta 3000
      '/auth': process.env.PROXY_AUTH
    }
  }
});
