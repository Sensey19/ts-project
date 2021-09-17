<template>
  <div>
    home page
    <Banner :data="{ firstName: 24, lastName: 214}" />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import Banner from '~/components/Banner.vue';

export default Vue.extend({
  components: {
    Banner,
  },
});
</script>
