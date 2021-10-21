<template>
  <div>
    Banner
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';
import { User } from '~/@types/user';
import test from '~/mixins/test';

export default mixins(test).extend({
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
    this.getUser({ firstName: 'fsdf', lastName: 'ddd' });
  },
  methods: {
    getUser(obj: User): void {
      console.log(obj);
    }
  }
});
</script>
