/*
 * @Author: lee
 * @Date: 2022-11-09 17:25:02
 * @LastEditTime: 2022-11-10 09:41:33
 */
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~pages";

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;