<!--
 * @Author: lee
 * @Date: 2022-11-10 09:40:04
 * @LastEditTime: 2022-11-10 12:04:52
 * @desc: 404通用页面
-->
<template>
  <div class="main-404">
    <div class="img-box">
      <img src="../../public/images/404.png" alt="404" />
    </div>

    <div class="tips-box">
      <p class="title">OOPS!</p>
      <p class="bullshit__headline">
        The webmaster said that you can not enter this page...
      </p>
      <p class="bullshit__info">
        Please check that the URL you entered is correct, or click the button
        below to return to the homepage.
      </p>
      <el-button round color="#626aef" @click="handleToHome">Back to home</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

function handleToHome() {
  return router.push({
    name: "index"
  })
}
</script>

<style lang="less" scoped>
.main-404 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
  .img-box {
    width: 400px;
    img {
      width: 100%;
    }
  }
  .tips-box {
    width: 300px;
    text-align: left;
    .title {
      font-size: 32px;
      line-height: 40px;
      color: #1482f0;
      margin-bottom: 20px;
    }
    .bullshit__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      margin-bottom: 10px;
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
    .bullshit__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      margin-bottom: 30px;
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
  }
}
</style>
