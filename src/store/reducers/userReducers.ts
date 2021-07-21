import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_RESET,
  AuthDispatchTypes,
  AUTH_CLEAR_ERROR,
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILED,
  FETCH_USER_INFO_RESET,
} from "../constants/userConstants";

export type AuthState = {
  isAuthenticated?: boolean;
  loading?: boolean;
  success?: boolean;
  error?: string;
  userInfo: {
    user_id?: number;
    profile_image?: string;
    name?: string;
    email?: string;
    nik?: string;
    password?: string;
    address?: string;
    phone?: string;
    birthday?: string;
  };
};

export const authReducer = (
  state: AuthState = {
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    userInfo: {},
  },
  action: AuthDispatchTypes
): AuthState => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, loading: false, success: true, isAuthenticated: true };
    case AUTH_FAILED:
      return {
        ...state,
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
      return { ...state, isAuthenticated: false };
    case FETCH_USER_INFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case FETCH_USER_INFO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case FETCH_USER_INFO_RESET:
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};
