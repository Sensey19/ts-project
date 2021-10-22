<template>
  <div>
    home page
    <Banner :message="message" />
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
import { IUser } from '~/@types/user';
import Banner from '~/components/Banner/Banner.vue';

export default Vue.extend({
  components: {
    Banner
  },
  data() {
    return {
      message: {
        firstName: 'firstName',
        lastName: 'lastName'
      } as IUser
    };
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
    changeCount(): void {
      const newCount = Math.floor(Math.random() * (100 - 2 + 1) + 2);
      this.$accessor.changeCount(newCount);
    },
    getUser(): void {
      this.$accessor.user.getUser();
    }
  }
});
</script>

<style lang="scss" scoped>
   .test {
     color: green
   }
</style>
