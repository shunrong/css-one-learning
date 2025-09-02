import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 使用现代 Sass 语法，避免 legacy 警告
        silenceDeprecations: ['legacy-js-api', 'import']
      },
      less: {
        additionalData: '@import "@/styles/variables.less";'
      }
    },
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
