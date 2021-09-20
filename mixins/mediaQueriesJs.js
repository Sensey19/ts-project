export default {
  data() {
    return {
      $media768Max: null,
      $media769Min: null
    };
  },
  mounted() {
    this.$media768Max = window.matchMedia('(max-width: 768px)').matches;
    this.$media769Min = window.matchMedia('(min-width: 769px)').matches;
  }
};
