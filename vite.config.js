import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/', // <-- replace with your repo name
  plugins: [react()],
  server: {
    proxy: {
      '/weather': 'http://localhost:3001', // this will forward /weather requests to your Express backend
    },
  },
});