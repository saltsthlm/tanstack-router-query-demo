import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// 1. Build time: the plugin scans src/routes/* and generates src/routeTree.gen.ts
export default defineConfig({
  plugins: [
    // Must come before the React plugin
    tanstackRouter({ target: 'react' }),
    react(),
  ],
})
