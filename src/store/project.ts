/*
 * @Author: lee
 * @Date: 2022-11-10 14:49:43
 * @LastEditTime: 2022-11-10 15:15:47
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore("project", () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return {
    count,
    increment
  }
})