/*
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-15 11:38:59
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    minify: true,
    pure: ["console.log"]
  },
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    vue(),
    Pages({
      // 自动化路由配置
      // 规则只命中components下的一级文件
      exclude: ['**/components/**/*', '**/service/**/*'],
      dirs: 'src/pages',
      // extensions: [ 'vue' ],
    }),
    // 按需导入element
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      }
    ]
  }
})
