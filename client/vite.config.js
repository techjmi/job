import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:5000",
        // target:"",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})

