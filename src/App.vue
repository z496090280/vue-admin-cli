<!--
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-15 11:46:46
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

<style lang="scss" scoped>

</style>