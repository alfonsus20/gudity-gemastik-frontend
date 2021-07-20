import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_RESET,
  AuthDispatchTypes,
} from "../constants/userConstants";

export type AuthType = {
  isAuthenticated: boolean;
  loading?: boolean;
  success?: boolean;
  error?: string;
};

export const authReducer = (
  state: AuthType = {
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
  },
  action: AuthDispatchTypes
) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { loading: true };
    case AUTH_SUCCESS:
      return { loading: false, success: true };
    case AUTH_FAILED:
      return { loading: false, success: false, error: action.payload };
    case AUTH_RESET:
      return { isAuthenticated: false };
    default:
      return state;
  }
};
