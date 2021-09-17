<template>
  <div>
    Banner
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

    interface User {
        firstName: string,
        lastName: string
    }

export default Vue.extend({
  props: {
    data: {
      type: Object as () => User,
      default: () => {},
    },
  },
  data() {
    return {
      num: 11,
    };
  },
  computed: {
    counter(): number {
      return this.num as number;
    },
  },
  mounted(): void {
    console.log(this.data);
    this.getUser({ firstName: 'ada', lastName: 'ddd' });
  },
  methods: {
    getUser({ firstName, lastName }: User): void {
      console.log(firstName, lastName);
    },
  },
});
</script>
