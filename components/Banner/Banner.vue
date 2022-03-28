<template>
  <div>
    Banner
    <some-children-banner />
    <some-ui-component />
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';
import { IUser } from '~/@types/user';
import test from '~/mixins/test';
import getSomeInfo from './mixins/getSomeInfo';
import SomeChildrenBanner from './SomeChildrenBanner/SomeChildrenBanner.vue';
import SomeUiComponent from './UI/SomeUiWhatOnlyUseForThisComponent/SomeUiWhatOnlyUseForThisComponent.vue';

export default mixins(test, getSomeInfo).extend({
  components: {
    SomeChildrenBanner,
    SomeUiComponent
  },
  data() {
    return {
      num: 11 as number
    };
  },
  computed: {
    counter(): number {
      return this.num;
    }
  },
  mounted(): void {
    this.getUser({ firstName: 'firstName', lastName: 'lastName' });
  },
  methods: {
    getUser(obj: IUser): void {
      console.log(obj);
    }
  }
});
</script>

<style lang="scss" scoped>
    @import "Banner.scss";
</style>
