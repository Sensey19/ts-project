import { getAccessorType } from 'typed-vuex';
import {
  state,
  getters,
  mutations,
  actions
} from '~/store';
import * as user from '~/store/user';

const initialStore = () => ({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
});

export const accessorType = getAccessorType(initialStore());
