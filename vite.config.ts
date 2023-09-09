import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // visualizer({
    //   template: 'treemap', // or sunburst
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: 'analyse.html' // will be saved in project's root
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
