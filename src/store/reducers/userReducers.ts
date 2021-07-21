import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_RESET,
  AuthDispatchTypes,
  AUTH_CLEAR_ERROR,
} from "../constants/userConstants";

export type AuthStates = {
  isAuthenticated: boolean;
  loading?: boolean;
  success?: boolean;
  error?: string;
};

export const authReducer = (
  state: AuthStates = {
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
  },
  action: AuthDispatchTypes
) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { loading: true };
    case AUTH_SUCCESS:
      return { loading: false, success: true, isAuthenticated: true };
    case AUTH_FAILED:
      return {
        loading: false,
        success: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case AUTH_RESET:
      return { isAuthenticated: false };
    default:
      return state;
  }
};
