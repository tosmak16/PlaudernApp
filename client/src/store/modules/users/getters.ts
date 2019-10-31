import { GetterTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "@/store/types";

const getters: GetterTree<UserState, RootState> = {
  userList: state => state.users,
  totalPages: state => state.pagination.totalPages
};

export default getters;
