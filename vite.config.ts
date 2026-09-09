import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Serve at root during development; change for gh-pages if needed
  base: '/',
  plugins: [react(), tailwindcss()],
})
