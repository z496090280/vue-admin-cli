/*
 * @Author: lee
 * @Date: 2022-11-10 16:00:18
 * @LastEditTime: 2022-11-10 16:20:13
 */
import axios from "axios";
import { ElMessage } from "element-plus";

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  return config;
});

// 添加响应拦截器
axios.interceptors.response.use(
  (result) => {
    return result;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
