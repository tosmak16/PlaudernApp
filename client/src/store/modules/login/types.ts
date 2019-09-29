export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const CLEAR_SERVER_ERROR = "CLEAR_SERVER_ERROR";
export const LOG_OUT = "LOG_OUT";

export type UserForLogin = {
  username: string;
  password: string;
};

export interface LoginState {
  formData: UserForLogin;
  isLoading: boolean;
  errorMessage: string;
  isSuccess: boolean;
  isLoggedIn: boolean;
}
