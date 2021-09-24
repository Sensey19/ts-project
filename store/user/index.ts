import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '~/store';
import { MutationsList } from '~/store/-listMutations';
import { User } from './types';

export const state = () => ({
  user: {
    firstName: '',
    age: null
  } as User
});
export type UserState = ReturnType<typeof state>

export const mutations: MutationTree<UserState> = {
  [MutationsList.GET_USER](state, obj: {}) {
    state.user = obj;
  }
};

export const actions: ActionTree<UserState, RootState> = {
  getUser({ commit }) {
    const user: User = {
      firstName: 'Sensey',
      age: 28
    };
    commit(MutationsList.GET_USER, user);
  }
};

export const getters: GetterTree<UserState, RootState> = {
  user: (state) => state.user
};
