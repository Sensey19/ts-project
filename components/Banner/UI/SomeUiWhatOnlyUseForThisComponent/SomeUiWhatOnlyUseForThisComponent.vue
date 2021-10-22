<template>
  <div>
    SomeUiComponentWhatOnlyUseForThisComponent
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      app: {}
    };
  }
});
</script>

<style lang="scss" scoped>
    @import "SomeUiWhatOnlyUseForThisComponent";
</style>
