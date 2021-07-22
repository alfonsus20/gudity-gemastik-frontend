import { LocationChangeAction} from "connected-react-router";
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
  UpdateSupplierDispatchTypes,
  UPDATE_SUPPLIER_INFO_LOADING,
  UPDATE_SUPPLIER_INFO_SUCCESS,
  UPDATE_SUPPLIER_INFO_FAILED,
  UPDATE_SUPPLIER_INFO_RESET,
  UPDATE_STORE_INFO_LOADING,
  UPDATE_STORE_INFO_SUCCESS,
  UPDATE_STORE_INFO_FAILED,
  UPDATE_STORE_INFO_RESET,
  UpdateStoreDispatchTypes,
} from "../constants/userConstants";

export type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  success?: boolean;
  successUpdateSupplier?: boolean;
  successUpdateStore?: boolean;
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
  action:
    | AuthDispatchTypes
    | UpdateSupplierDispatchTypes
    | UpdateStoreDispatchTypes
    | LocationChangeAction
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
      return { loading: false, isAuthenticated: false, userInfo: {} };
    case USER_INFO_LOADING ||
      UPDATE_SUPPLIER_INFO_LOADING ||
      UPDATE_STORE_INFO_LOADING:
      return { ...state, loading: true };
    case UPDATE_SUPPLIER_INFO_SUCCESS:
      return { ...state, successUpdateSupplier: true };
    case UPDATE_STORE_INFO_SUCCESS:
      return { ...state, successUpdateStore: true };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case UPDATE_SUPPLIER_INFO_FAILED:
      return {
        ...state,
        loading: false,
        successUpdateSupplier: false,
        error: action.payload,
      };
    case UPDATE_STORE_INFO_FAILED:
      return {
        ...state,
        loading: false,
        successUpdateStore: false,
        error: action.payload,
      };
    case UPDATE_SUPPLIER_INFO_RESET:
      return {
        ...state,
        successUpdateSupplier: false,
      };
    case UPDATE_STORE_INFO_RESET:
      return {
        ...state,
        successUpdateStore: false,
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
