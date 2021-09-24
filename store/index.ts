import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { MutationsList } from './-listMutations';

export const state = () => ({
  count: 0 as number
});
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // eslint-disable-next-line no-return-assign
  [MutationsList.CHANGE_COUNT](state, newVal: number) {
    state.count = newVal;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  changeCount({ commit }, newVal: number) {
    commit(MutationsList.CHANGE_COUNT, newVal);
  }
};

export const getters: GetterTree<RootState, RootState> = {
  count: (state) => state.count
};
