import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacyPolicy: fileURLToPath(new URL('./privacy-policy.html', import.meta.url)),
        csrPolicy: fileURLToPath(new URL('./csr-policy.html', import.meta.url)),
      },
    },
  },
})
