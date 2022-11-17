<template>
  <div class="city-container">
    <router-link to="City">
      <span class="city-name">{{'城市'}}</span>
      <div class="iconfont icon-header-arrow"></div>
    </router-link>
  </div>
</template>


<script setup lang="ts">
</script>


<style lang="scss" scoped>

  .city-container {
    width: .6rem;
    height: $headerHeight;

    a {
      @include flex-row;
      @include vh-center;

      width: 100%;
      height: $headerHeight;
      .city-name {
        font-size: .16rem;
        font-weight: bold;
      }

      .iconfont {
        font-size: .08rem;
        margin-left: .03rem;
      }
    }
  }

</style>