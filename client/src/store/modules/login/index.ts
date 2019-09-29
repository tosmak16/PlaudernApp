import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { LoginState } from "./types";
import { RootState } from "@/store/types";
import { Module } from "vuex";

const state: LoginState = {
  formData: {
    username: "",
    password: ""
  },
  isLoading: false,
  errorMessage: "",
  isSuccess: false,
  isLoggedIn: false
};

const namespaced: boolean = false;

const login: Module<LoginState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters
};

export default login;
