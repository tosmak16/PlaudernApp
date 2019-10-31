import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  UserState,
  Users
} from "./types";
import { MutationTree } from "vuex";

const mutations: MutationTree<UserState> = {
  [GET_ALL_USERS_START](state) {
    state = Object.assign(state, {
      isLoading: true,
      errorMessage: ""
    });
  },

  [GET_ALL_USERS_SUCCESS](
    state,
    payload: { users: Users[]; pagination: { totalPages: 1 } }
  ) {
    state = Object.assign(state, {
      isLoading: false,
      users: payload.users,
      pagination: payload.pagination
    });
  },

  [GET_ALL_USERS_FAIL](state, errorMessage) {
    state = Object.assign(state, {
      isLoading: false,
      errorMessage
    });
  }
};

export default mutations;
