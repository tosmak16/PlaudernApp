import axios from "axios";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_SERVER_ERROR,
  LOG_OUT,
  LoginState
} from "./types";
import { ActionTree } from "vuex";
import { RootState } from "@/store/types";

const actions: ActionTree<LoginState, RootState> = {
  login({ commit }, formData) {
    commit(LOGIN_START, formData);
    axios
      .post(`${process.env.VUE_APP_API_BASE_URL}auth/login/`, formData)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        response.status === 200 ? commit(LOGIN_SUCCESS) : null;
      })
      .catch(error => commit(LOGIN_FAIL, "Username or passwor is incorrect."));
  },

  logout({ commit }) {
    commit(LOG_OUT, false);
  },
  clearServerError({ commit }) {
    commit(CLEAR_SERVER_ERROR, "");
  }
};

export default actions;
