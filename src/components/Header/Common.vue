<template>
  <div class="header">
    <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </div>
</template>


<script setup lang="ts">
import BackWard from './Sub/BackWard.vue'



withDefaults(defineProps<{
  title: string
}>(), {
  title: '一线生活通'
})

</script>


<style lang="scss" scoped>


.header {
  @include flex-row;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;

  h1 {
    font-size: .18rem;
  }
}
</style>