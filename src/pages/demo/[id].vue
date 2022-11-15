<!--
 * @Author: lee
 * @Date: 2022-11-15 10:09:13
 * @LastEditTime: 2022-11-15 11:06:17
-->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>{{ route.params.id }}</div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'demo-id',
}
</script>

<style lang="scss" scoped></style>
