import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true, // Listen on all local IPs
    port: 5173, // Default port
    open: false, // Don't open browser automatically
    strictPort: false, // Use another port if default is in use
    cors: true, // Enable CORS
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
