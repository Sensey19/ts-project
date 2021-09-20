<template>
    <div>
        home page
        <Banner :data="{ddd: 'sss'}" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '~/components/Banner.vue';

export default Vue.extend({
  components: {
    Banner
  }
});
</script>
