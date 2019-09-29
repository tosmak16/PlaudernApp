import { GetterTree } from "vuex";
import { SignUpState } from "./types";
import { RootState } from "@/store/types";

const getters: GetterTree<SignUpState, RootState> = {
  signUpErrorMessage: state => state.errorMessage,
  isSignUpSuccess: state => state.isSuccess,
  isSignUpLoading: state => state.isLoading
};

export default getters;
