<!--
 * @Author: lee
 * @Date: 2022-11-09 17:43:29
 * @LastEditTime: 2022-11-15 11:48:30
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="basic-layout-menu">
        <el-scrollbar height="100vh">
          <BasicMenu />
        </el-scrollbar>
      </el-aside>

      <el-container class="main-right">
        <el-header class="basic-layout-header">
          <BasicHeader />
        </el-header>

        <el-main class="basic-layout-content">
          <el-scrollbar> <slot></slot> </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BasicHeader from "@/components/BasicHeader/BasicHeader.vue";
import BasicMenu from "@/components/BasicMenu/BasicMenu.vue";
import "./BasicLayout.scss";
</script>

<style lang="scss" scoped></style>
