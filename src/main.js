/*
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-10 10:09:50
 */
import app from "./app"
// 引入路由
import router from "./router"

app.use(router);

app.mount('#app');
