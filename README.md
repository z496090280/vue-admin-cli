<!--
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-10 15:59:44
-->
# 项目管理
> 推荐：pnpm
```
1. pnpm install   // 依赖安装
2. npm run dev    // 启动dev环境
3. npm run build    // 打包项目
````

# Vue 3 + Vite + pinia

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# 路由介绍
> npm地址: https://www.npmjs.com/package/vite-plugin-pages
- 哈希路由
- vite-plugin-pages插件
- pages下新建一级文件如：/pages/add/index.vue，则自动创建路由
- 匹配404页面
- 过滤/pages/components/** 下文件，可支持自定义单页面组件。

# ui 
Element-plus **按需加载**，文件内直接引用即可，支持tree shaking。

# 刻意而为之事项
- 导入文件时不忽略拓展名（例如：.vue），因为它会影响 IDE 和类型支持。

# 插件介绍
```
1. Immer  // 简化了不可变数据结构的处理
2. lodash-es  // 函数处理工具即lodash压缩包，利于tree shaking
```