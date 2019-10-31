import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import createPersistedState from "vuex-persistedstate";

import signUp from "./modules/signUp";
import login from "./modules/login";

import { RootState } from "./types";
import users from "./modules/users";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0" // a simple property
  },
  modules: {
    signUp,
    login,
    users
  },

  plugins: [
    createPersistedState({
      paths: ["login"]
    })
  ]
};

export default new Vuex.Store<RootState>(store);
