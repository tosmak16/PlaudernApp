import axios from "axios";

import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CLEAR_SERVER_ERROR,
  SignUpState,
  UserForRegister
} from "./types";

import { LOGIN_SUCCESS } from "../login/types";
import { ActionTree } from "vuex";
import { RootState } from "@/store/types";

export const actions: ActionTree<SignUpState, RootState> = {
  register({ commit }, formData: UserForRegister) {
    commit(SIGNUP_START, formData);
    axios
      .post(`${process.env.VUE_APP_API_BASE_URL}auth/register`, formData)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        commit(SIGNUP_SUCCESS, response.status === 200);
        response.status === 200 ? commit(LOGIN_SUCCESS) : null;
      })
      .catch(error => commit(SIGNUP_FAIL, error.response.data.message));
  },

  clearServerError({ commit }) {
    commit(CLEAR_SERVER_ERROR, "");
  }
};

export default actions;
