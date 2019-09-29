import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { SignUpState } from "./types";
import { RootState } from "@/store/types";
import { Module } from "vuex";

export const state: SignUpState = {
  formData: {
    username: "",
    city: "",
    country: "",
    password: "",
    gender: "Male",
    dateOfBirth: ""
  },
  isLoading: false,
  errorMessage: "",
  isSuccess: false
};

const namespaced: boolean = false;

const signUp: Module<SignUpState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};

export default signUp;
