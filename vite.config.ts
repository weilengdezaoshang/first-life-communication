import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'styles': fileURLToPath(new URL('src/assets/styles', import.meta.url)),
      'js': fileURLToPath(new URL('src/assets/js', import.meta.url)),
      'components': fileURLToPath(new URL('src/assets/components', import.meta.url)),
      'data': fileURLToPath(new URL('src/assets/data', import.meta.url)),
      'utils': fileURLToPath(new URL('src/utils', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
})
