import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' mantém caminhos relativos: funciona em GitHub Pages (subpasta) e Vercel.
export default defineConfig({
  base: './',
  plugins: [react()],
});
