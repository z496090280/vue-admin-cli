<!--
 * @Author: lee
 * @Date: 2022-11-09 17:43:29
 * @LastEditTime: 2022-11-10 11:21:33
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

        <el-scrollbar>
          <el-main>
            <slot></slot>
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BasicHeader from "../BasicHeader/BasicHeader.vue";
import BasicMenu from "../BasicMenu/BasicMenu.vue";
import "./BasicLayout.less";
</script>

<style lang="less" scoped></style>
