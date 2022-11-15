<!--
 * @Author: lee
 * @Date: 2022-11-09 18:04:00
 * @LastEditTime: 2022-11-15 11:03:12
-->
<template>
  <div>
    此处演示如何动态路由、子路由
    <ul>
      <li style="cursor: pointer" v-for="item in routeData" :key="item.id">
        <span @click="(e) => handleJump(e, item)">{{ item.title }}</span>
      </li>
    </ul>
    <span> 此处展示store数据：</span>
    {{ storeProject.count }}
    <span> 此处三级嵌套</span>
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="140" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores'
import { useRouter } from 'vue-router'

const router = useRouter()

const storeProject = useProjectStore()
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const routeData = [
  { id: 1, title: '子路由1' },
  { id: 2, title: '子路由2' },
  { id: 3, title: '子路由3' },
]
const tableData = ref(Array.from({ length: 100 }).fill(item))

function handleJump(e: Event, s: any) {
  // console.log(e, s)
  router.push({
    path: `/demo/${s.id}`,
  })
}
</script>

<style lang="scss" scoped></style>
