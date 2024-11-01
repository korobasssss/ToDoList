/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      'SERVER_URL': 'http://localhost:8089'
    }
  },
  server: {
    port: 3000
  }
})
