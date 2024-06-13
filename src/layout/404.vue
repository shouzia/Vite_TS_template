<template>
  <div class="w-[100%] h-[100vh] flex justify-center items-center flex-col">
    <p>404</p>
    <p>页面不存在</p>
    <el-button type="primary" plain @click="goToHome">
      返回首页
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push(
    '/'
  )
}
</script>

<style></style>
