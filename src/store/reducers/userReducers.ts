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
  FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS,
  FetchUserSupplierProductsDispatchTypes,
  DeleteUserProductDispatchTypes,
} from "../constants/userConstants";
import { SupplierState } from "./supplierReducers";
import { UmkmState } from "./umkmReducers";

export type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  success?: boolean;
  successUpdateSupplier?: boolean;
  successUpdateStore?: boolean;
  error?: string;
  userInfo: UserState;
  isDeletingUserSupplierProduct?: boolean;
};

export type UserState = {
  id: number;
  name: string;
  address: string;
  birthday: string;
  email: string;
  phone: string;
  identity_number: string;
  thumbnail: string;
  is_supplier: boolean;
  is_store: boolean;
  supplier_info?: SupplierState;
  store_info?: UmkmState;
};

export const authReducer = (
  state: AuthState = {
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    userInfo: {} as UserState,
  },
  action:
    | AuthDispatchTypes
    | UpdateSupplierDispatchTypes
    | UpdateStoreDispatchTypes
    | FetchUserSupplierProductsDispatchTypes
    | DeleteUserProductDispatchTypes
): AuthState => {
  switch (action.type) {
    case AUTH_LOADING:
    case USER_INFO_LOADING:
    case UPDATE_SUPPLIER_INFO_LOADING:
    case UPDATE_STORE_INFO_LOADING:
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
      return {
        loading: false,
        isAuthenticated: false,
        userInfo: {} as UserState,
      };
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
      return { ...state, userInfo: {} as UserState };
    case FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          supplier_info: {
            ...state.userInfo.supplier_info!,
            products: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
