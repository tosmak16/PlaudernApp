import axios from "axios";

import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  UserState
} from "./types";
import { ActionTree } from "vuex";
import { RootState } from "@/store/types";

const actions: ActionTree<UserState, RootState> = {
  getUsers({ commit }, pageNumber?: number) {
    commit(GET_ALL_USERS_START);
    axios
      .get(
        `${process.env.VUE_APP_API_BASE_URL}users?page=${
          !pageNumber ? "1" : pageNumber
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )
      .then(response => {
        const { users, pagination } = response.data;
        response.status === 200
          ? commit(GET_ALL_USERS_SUCCESS, { users, pagination })
          : null;
      })
      .catch(error => commit(GET_ALL_USERS_FAIL, "Get list of users failed"));
  }
};

export default actions;
