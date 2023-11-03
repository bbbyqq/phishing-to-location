import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'   // 解决报错安装@types/node，npm install @types/node

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        // target: 'http://121.40.42.254:17912/', // 内网穿透
        // target: 'http://47.98.186.145:45145/', // 线上
        target: 'https://haishu.hzzhishui.com:47842/', // 域名
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: { // 设置别名
      '@': resolve(__dirname, 'src'),
      '@c': resolve(__dirname, 'src/components')
    }
  }
})
