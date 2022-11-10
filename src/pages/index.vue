<!--
 * @Author: lee
 * @Date: 2022-11-09 17:27:26
 * @LastEditTime: 2022-11-10 15:39:55
-->
<template>
  <div>
    hello index home
    {{ storeProject.count }}
    <el-button size="large" @click="handleAdd">+1</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProjectStore } from "@/store";
const storeProject = useProjectStore();

function handleAdd() {
  storeProject.increment()
}
</script>

<style lang="less" scoped></style>
