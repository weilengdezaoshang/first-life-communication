<template>
  <div class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </div>
</template>


<script setup lang="ts">
import CitySelector from './Sub/CitySelector.vue';
import FalseInput from './Sub/FalseInput.vue';
</script>



<style lang="scss" scoped>
.header {
  @include flex-row;
  background-color: $defaultBgColor;
}
</style>