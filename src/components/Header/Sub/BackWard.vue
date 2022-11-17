<template>
  <div class="back-ward" @click="onRouterBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
const onRouterBack = () => {
  router.go(-1);
}
</script>



<style lang="scss" scoped>
.back-ward {
  position: absolute;
  top: 0;
  left: 0;
  @include flex-row;
  @include vh-center;
  width: $headerHeight;
  height: $headerHeight;

  .iconfont {
    font-size: .2rem;
  }
}
</style>