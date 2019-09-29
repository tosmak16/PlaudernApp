// action types

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const CLEAR_SERVER_ERROR = "CLEAR_SERVER_ERROR";

// models

export type UserForRegister = {
  username: string;
  city: string;
  country: string;
  password: string;
  gender: string;
  dateOfBirth: string;
};

export interface SignUpState {
  formData: UserForRegister;
  isLoading: boolean;
  errorMessage: string;
  isSuccess: boolean;
}
