import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.jpg', '.jpeg', '.png']
  }
});











//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})

//import { defineConfig } from 'vite';
//import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//  resolve: {
//    alias: {
//      // You can add more file extensions here if needed
//      alias: {
//        alias: [
//          { find: '@', replacement: '/src' }
//        ]
//      },
//      extensions: ['.js', '.jsx', '.json', '.css', '.jpg', '.jpeg', '.png']
//    }
//  }
//});
