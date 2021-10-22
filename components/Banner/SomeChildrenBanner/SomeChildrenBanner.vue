<template>
  <div>
    children of the banner
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      list: {}
    };
  }
});
</script>

<style lang="scss" scoped>
    @import "SomeChildrenBanner";
</style>
