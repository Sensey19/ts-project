<template>
  <div>
    home page
    <Banner />
    <p>{{ getCount }}</p>
    <button @click="changeCount">
      Click on!
    </button>
    <button @click="getUser">
      get user
    </button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '~/components/Banner.vue';

export default Vue.extend({
  components: {
    Banner
  },
  computed: {
    getCount(): number {
      return this.$store.getters.count;
    },
    user(): {} {
      return this.$store.getters['user/user'];
    }
  },
  methods: {
    changeCount() {
      const newCount = Math.floor(Math.random() * (100 - 2 + 1) + 2);
      this.$store.dispatch('changeCount', newCount);
    },
    getUser() {
      this.$store.dispatch('user/getUser');
    }
  }
});
</script>
