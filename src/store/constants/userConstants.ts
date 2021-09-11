import { UserState } from "../reducers/userReducers";

export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILED = "AUTH_FAILED";
export const AUTH_CLEAR_ERROR = "AUTH_CLEAR_ERROR";
export const AUTH_RESET = "AUTH_RESET";

export interface AuthLoading {
  type: typeof AUTH_LOADING;
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
}

export interface AuthFailed {
  type: typeof AUTH_FAILED;
  payload: string;
}

export interface AuthErrorReset {
  type: typeof AUTH_CLEAR_ERROR;
}

export interface AuthReset {
  type: typeof AUTH_RESET;
}

export const USER_INFO_LOADING = "USER_INFO_LOADING";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_FAILED = "USER_INFO_FAILED";
export const USER_INFO_RESET = "USER_INFO_RESET";

export interface UserInfoLoading {
  type: typeof USER_INFO_LOADING;
}

export interface UserInfoSuccess {
  type: typeof USER_INFO_SUCCESS;
  payload: UserState;
}

export interface UserInfoFailed {
  type: typeof USER_INFO_FAILED;
  payload: string;
}

export interface UserInfoReset {
  type: typeof USER_INFO_RESET;
}

export type AuthDispatchTypes =
  | AuthLoading
  | AuthSuccess
  | AuthFailed
  | AuthErrorReset
  | AuthReset
  | UserInfoLoading
  | UserInfoSuccess
  | UserInfoFailed
  | UserInfoReset;

export const UPDATE_SUPPLIER_INFO_LOADING = "UPDATE_SUPPLIER_INFO_LOADING";
export const UPDATE_SUPPLIER_INFO_SUCCESS = "UPDATE_SUPPLIER_INFO_SUCCESS";
export const UPDATE_SUPPLIER_INFO_FAILED = "UPDATE_SUPPLIER_INFO_FAILED";
export const UPDATE_SUPPLIER_INFO_RESET = "UPDATE_SUPPLIER_INFORESETG";

export interface UpdateSupplierInfoLoading {
  type: typeof UPDATE_SUPPLIER_INFO_LOADING;
}

export interface UpdateSupplierInfoSuccess {
  type: typeof UPDATE_SUPPLIER_INFO_SUCCESS;
}

export interface UpdateSupplierInfoFailed {
  type: typeof UPDATE_SUPPLIER_INFO_FAILED;
  payload: string;
}

export interface UpdateSupplierInfoReset {
  type: typeof UPDATE_SUPPLIER_INFO_RESET;
}

export type UpdateSupplierDispatchTypes =
  | UpdateSupplierInfoLoading
  | UpdateSupplierInfoSuccess
  | UpdateSupplierInfoFailed
  | UpdateSupplierInfoReset;

export const UPDATE_STORE_INFO_LOADING = "UPDATE_STORE_INFO_LOADING";
export const UPDATE_STORE_INFO_SUCCESS = "UPDATE_STORE_INFO_SUCCESS";
export const UPDATE_STORE_INFO_FAILED = "UPDATE_STORE_INFO_FAILED";
export const UPDATE_STORE_INFO_RESET = "UPDATE_STORE_INFORESETG";

export interface UpdateStoreInfoLoading {
  type: typeof UPDATE_STORE_INFO_LOADING;
}

export interface UpdateStoreInfoSuccess {
  type: typeof UPDATE_STORE_INFO_SUCCESS;
}

export interface UpdateStoreInfoFailed {
  type: typeof UPDATE_STORE_INFO_FAILED;
  payload: string;
}

export interface UpdateStoreInfoReset {
  type: typeof UPDATE_STORE_INFO_RESET;
}

export type UpdateStoreDispatchTypes =
  | UpdateStoreInfoLoading
  | UpdateStoreInfoSuccess
  | UpdateStoreInfoFailed
  | UpdateStoreInfoReset;
