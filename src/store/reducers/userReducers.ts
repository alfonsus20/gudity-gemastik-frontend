import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_RESET,
  AuthDispatchTypes,
  AUTH_CLEAR_ERROR,
  USER_INFO_LOADING,
  USER_INFO_SUCCESS,
  USER_INFO_FAILED,
  USER_INFO_RESET,
} from "../constants/userConstants";

export type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
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
    supplier_image?: string;
    supplier_owner_name?: string;
    supplier_address?: string;
    supplier_name?: string;
    supplier_phone?: string;
    supplier_description?: string;
    store_name?: string;
    store_description?: string;
    store_address?: string;
    store_phone?: string;
    store_start_at?: string;
    store_finish_at?: string;
    store_image?: string;
    products?: string[];
    invoices?: string[];
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
    case USER_INFO_LOADING:
      return { ...state, loading: true };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case USER_INFO_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case USER_INFO_RESET:
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};
