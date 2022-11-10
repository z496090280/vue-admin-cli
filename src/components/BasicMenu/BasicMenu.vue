<!--
 * @Author: lee
 * @Date: 2022-11-09 17:48:37
 * @LastEditTime: 2022-11-10 11:11:44
-->
<template>
  <div class="basic-header">
    <p v-for="item in tableData">{{ item.date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import "./BasicMenu.less";
const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = computed(() => Array.from({ length: 200 }).fill(item))
// const tableData = ref<{
//   date: string;
//   name: string,
//   address: string;
// }>(Array.from({ length: 20 }).fill(item));
</script>
