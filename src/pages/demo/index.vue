<!--
 * @Author: lee
 * @Date: 2022-11-09 18:04:00
 * @LastEditTime: 2022-11-10 11:50:38
-->
<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="140" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 10 }).fill(item));
</script>

<style lang="less" scoped></style>
