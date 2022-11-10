<!--
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-10 14:26:50
-->
<template>
    <div>
      <BasicLayout>
        <router-view />
      </BasicLayout>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue" 
import BasicLayout from "@/components/BasicLayout/BasicLayout.vue"

</script>

<style lang="less" scoped>

</style>