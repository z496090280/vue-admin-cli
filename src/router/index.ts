/*
 * @Author: lee
 * @Date: 2022-11-09 17:25:02
 * @LastEditTime: 2022-11-09 17:36:33
 */
import { createRouter, createMemoryHistory } from "vue-router";
import routes from "~pages";

console.log(routes)

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;