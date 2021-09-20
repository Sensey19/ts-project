import Vue from 'vue';
// import UiButton from '~/components/UI/Button/UiButton';

const components = {
  // UiButton
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
