<!--
 * @Author: lee
 * @Date: 2022-11-09 17:16:14
 * @LastEditTime: 2022-11-15 12:05:58
-->
<template>
  <el-config-provider :locale="locale">
    <div>
      <BasicLayout>
        <router-view />
      </BasicLayout>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import BasicLayout from "@/components/BasicLayout/BasicLayout.vue";

const locale = zhCn;
</script>

<style lang="scss" scoped></style>
