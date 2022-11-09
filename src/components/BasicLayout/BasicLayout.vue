<!--
 * @Author: lee
 * @Date: 2022-11-09 17:43:29
 * @LastEditTime: 2022-11-09 18:17:05
-->
<template>
  <div class="basic-layout">
    <div class="basic-layout-menu">
      <BasicMenu />
    </div>
    <div class="basic-layout-header">
      <BasicHeader />
    </div>

    <div class="basic-layout-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BasicHeader from "../BasicHeader/BasicHeader.vue";
import BasicMenu from "../BasicMenu/BasicMenu.vue"
import './BasicLayout.less';
</script>

<style lang="less" scoped></style>
