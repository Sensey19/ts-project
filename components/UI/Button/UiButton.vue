<template>
  <button>btn</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      name: '' as string
    };
  }
});
</script>

<style lang="scss" scoped>
    @import "UiButton";
</style>
