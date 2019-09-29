import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CLEAR_SERVER_ERROR,
  SignUpState,
  UserForRegister
} from "./types";
import { MutationTree } from "vuex";

export const mutations: MutationTree<SignUpState> = {
  [SIGNUP_START](state, formData: UserForRegister) {
    state = Object.assign(state, {
      formData,
      isLoading: true,
      errorMessage: ""
    });
  },

  [SIGNUP_SUCCESS](state, isSuccess: boolean) {
    state = Object.assign(state, {
      isLoading: false,
      isSuccess
    });
  },

  [SIGNUP_FAIL](state, errorMessage: boolean) {
    state = Object.assign(state, {
      isLoading: false,
      isSuccess: false,
      errorMessage
    });
  },

  [CLEAR_SERVER_ERROR](state, errorMessage: boolean) {
    state = Object.assign(state, {
      errorMessage
    });
  }
};

export default mutations;
