import {
  getterTree, mutationTree, actionTree
} from 'typed-vuex';
import { MutationsList } from '~/store/-listMutations';
import { User } from './-types';

export const state = () => ({
  user: {
    firstName: '',
    age: null
  } as User
});

export const getters = getterTree(state, {
  isUser: (state) => state.user
});

export const mutations = mutationTree(state, {
  [MutationsList.GET_USER](state, obj: {}) {
    state.user = obj;
  }
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    getUser({ commit }) {
      const user: User = {
        firstName: 'Sensey',
        age: 20
      };
      commit(MutationsList.GET_USER, user);
    }
  }
);
