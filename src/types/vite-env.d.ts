/*
 * @Author: lee
 * @Date: 2022-11-09 17:35:50
 * @LastEditTime: 2022-11-11 10:32:56
 */
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'element-plus/dist/locale/zh-cn.mjs'