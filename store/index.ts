import {
  getterTree, mutationTree, actionTree
} from 'typed-vuex';
import { Context } from '@nuxt/types';
import { MutationsList } from './-listMutations';

export const state = () => ({
  count: 0 as number
});

export const getters = getterTree(state, {
  count: (state) => state.count
});

export const mutations = mutationTree(state, {
  [MutationsList.CHANGE_COUNT](state, newVal: number) {
    state.count = newVal;
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    changeCount({ commit }, newVal: number) {
      commit(MutationsList.CHANGE_COUNT, newVal);
    },
    async nuxtServerInit(_vuexContext, nuxtContext: Context) {
      await nuxtContext.app.$accessor.user.getUser();
      // console.log(nuxtContext);
    }
  }
);
