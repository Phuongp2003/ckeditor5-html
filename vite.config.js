import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ], 
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {
      CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_URL: process.env.CLOUDINARY_URL,
      "CLOUDINARY_FOLDER": process.env.CLOUDINARY_FOLDER,
      "CLOUDINARY_UPLOAD_PRESET": process.env.CLOUDINARY_UPLOAD_PRESET
    },
  },
})
