<template>
  <div>
    home page
    <Banner
      :message="{
        title: 'tille'
      }"
    />
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
      return this.$accessor.count;
    },
    user(): {} {
      return this.$accessor.user.isUser;
    }
  },
  methods: {
    changeCount() {
      const newCount = Math.floor(Math.random() * (100 - 2 + 1) + 2);
      this.$accessor.changeCount(newCount);
    },
    getUser() {
      this.$accessor.user.getUser();
    }
  }
});
</script>
