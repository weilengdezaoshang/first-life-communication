<script setup lang="ts">
import { ref } from 'vue'
const title = ref('你好呀，世界')
</script>

<template>
  <div class="wrapper">{{ title }}</div>

  <span class="iconfont icon-star"></span>
</template>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
  }
</style>
