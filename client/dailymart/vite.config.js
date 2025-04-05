import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  
  // DaisyUI কনফিগ (tailwind.config.js-এ সরান)
  
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /\/payment-success\/.*/, to: '/index.html' }
      ]
    }
  }
})