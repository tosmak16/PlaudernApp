export const GET_ALL_USERS_START = "GET_ALL_USERS_START";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";

export type Users = {
  username: string;
  age: number;
  city: string;
  country: string;
  created: string;
  gender: string;
  id: number;
  lastActive: string;
  photoUrl: string;
};

export interface UserState {
  users: Users[];
  isLoading: boolean;
  errorMessage: string;
  pagination: { totalPages: number };
}
