/*
 * @Author: lee
 * @Date: 2022-11-09 17:25:02
 * @LastEditTime: 2022-11-09 18:24:20
 */
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;