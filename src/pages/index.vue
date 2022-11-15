<!--
 * @Author: lee
 * @Date: 2022-11-09 17:27:26
 * @LastEditTime: 2022-11-11 18:12:36
-->
<template>
  <div>
    hello index home
    {{ storeProject.count }}
    <el-button size="large" @click="handleAdd">+1</el-button>
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/stores'
import { ref } from 'vue'

const value1 = ref('')

const storeProject = useProjectStore()

function handleAdd() {
  storeProject.increment()
}
</script>

<style lang="scss" scoped></style>
