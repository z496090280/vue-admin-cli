<!--
 * @Author: lee
 * @Date: 2022-11-15 09:29:47
 * @LastEditTime: 2022-11-15 12:00:41
-->
<template>
  <div>
    <div>demo 父级</div>
    <hr />
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { ref, defineProps } from 'vue'
</script>

<script lang="ts">
export default {
  name: "demo-parent",
};
</script>

<style lang="scss" scoped></style>
