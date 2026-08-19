import { defineConfig } from 'vite'
import fs from 'fs'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      minify: 'terser',
      sourcemap: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: '[name]-[hash].js'
        }
      }
    },
    server: {
      port: 9000,
      host: true,
      open: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          quietDeps: true,
          silenceDeprecations: [
            'import',
            'color-functions',
            'global-builtin',
            'if-function'
          ]
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  }
})
