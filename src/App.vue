<!--
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-09 17:58:54
-->
<template>
    <div>
      <BasicLayout>
        <router-view />
      </BasicLayout>
    </div>
</template>

<script setup>
import { ref } from "vue" 
import BasicLayout from "./components/BasicLayout/BasicLayout.vue"

</script>

<style lang="less" scoped>

</style>