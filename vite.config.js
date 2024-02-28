import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/english-words/",
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: './src/CountingBJ.test.jsx'
  },
})
