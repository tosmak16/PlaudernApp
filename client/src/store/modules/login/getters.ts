import { GetterTree } from "vuex";
import { LoginState } from "./types";
import { RootState } from "@/store/types";

const getters: GetterTree<LoginState, RootState> = {
  loginErrorMessage: state => state.errorMessage,
  isLoggedInSuccess: state => state.isSuccess,
  isLoggedIn: state => state.isLoggedIn,
  isLoginLoading: state => state.isLoading
};

export default getters;
