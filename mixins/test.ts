import Vue from 'vue';

type MyBoolean = true | false | null | undefined;

export default Vue.extend({
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      $media768Max: null as MyBoolean,
      $media769Min: null as MyBoolean
    };
  },
  mounted() {
    this.$media768Max = window.matchMedia('(max-width: 768px)').matches;
    this.$media769Min = window.matchMedia('(min-width: 769px)').matches;
  }
});
