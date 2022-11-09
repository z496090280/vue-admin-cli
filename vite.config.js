/*
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-09 18:09:28
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      // 规则只命中components下的一级文件
      exclude: ["**/components/*.vue"],
      dirs: 'src/pages',
      // extensions: [ 'vue' ],
    }),
  ]
})
