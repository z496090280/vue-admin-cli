/*
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-10 14:54:02
 */
import app from "@/app";
// 引入路由
import router from "@/router";
// 引入状态管理
import { createPinia } from "pinia";

const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
