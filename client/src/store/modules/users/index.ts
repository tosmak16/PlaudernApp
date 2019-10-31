import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { UserState } from "./types";
import { RootState } from "@/store/types";
import { Module } from "vuex";

const state: UserState = {
  isLoading: false,
  errorMessage: "",
  users: [],
  pagination: { totalPages: 1 }
};

const namespaced: boolean = false;

const users: Module<UserState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters
};

export default users;
