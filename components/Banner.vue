<template>
  <div>
    Banner
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '~/@types/user';

export default Vue.extend({
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      num: 11
    };
  },
  computed: {
    counter(): number {
      return this.num;
    }
  },
  mounted(): void {
    console.log(this.data);
    this.getUser({ firstName: 'fsdf', lastName: 'ddd' });
  },
  methods: {
    getUser({ firstName, lastName }: User): void {
      console.log(firstName, lastName);
    }
  }
});
</script>
