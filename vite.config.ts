import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/enums': fileURLToPath(new URL('./src/enums', import.meta.url)),
      '@/interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'OrixTypes',
      fileName: 'index'
    },
    rollupOptions: {
      external: []
    }
  }
})