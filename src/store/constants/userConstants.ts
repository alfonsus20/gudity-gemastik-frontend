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

export const FETCH_USER_SUPPLIER_PRODUCTS_LOADING =
  "FETCH_USER_SUPPLIER_PRODUCTS_LOADING";
export const FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS =
  "FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS";
export const FETCH_USER_SUPPLIER_PRODUCTS_FAILED =
  "FETCH_USER_SUPPLIER_PRODUCTS_FAILED";

export type UserSupplierProduct = {
  id: number;
  name: string;
  price: number;
  quality: string;
  description: string;
  productType: number;
  thumbnail?: string;
};

export type FetchUserSupplierProductsLoading = {
  type: typeof FETCH_USER_SUPPLIER_PRODUCTS_LOADING;
};

export type FetchUserSupplierProductsSuccess = {
  type: typeof FETCH_USER_SUPPLIER_PRODUCTS_SUCCESS;
  payload: UserSupplierProduct[];
};

export type FetchUserSupplierProductsFailed = {
  type: typeof FETCH_USER_SUPPLIER_PRODUCTS_FAILED;
  payload: string;
};

export type FetchUserSupplierProductsDispatchTypes =
  | FetchUserSupplierProductsLoading
  | FetchUserSupplierProductsFailed
  | FetchUserSupplierProductsSuccess;

export const DELETE_USER_PRODUCT_LOADING = "DELETE_USER_PRODUCT_LOADING";
export const DELETE_USER_PRODUCT_SUCCESS = "DELETE_USER_PRODUCT_SUCCESS";
export const DELETE_USER_PRODUCT_FAILED = "DELETE_USER_PRODUCT_FAILED";

export type DeleteUserProductLoading = {
  type: typeof DELETE_USER_PRODUCT_LOADING;
};

export type DeleteUserProductSuccess = {
  type: typeof DELETE_USER_PRODUCT_SUCCESS;
};

export type DeleteUserProductFailed = {
  type: typeof DELETE_USER_PRODUCT_FAILED;
  payload: string;
};

export type DeleteUserProductDispatchTypes =
  | DeleteUserProductFailed
  | DeleteUserProductLoading
  | DeleteUserProductSuccess;

export const ADD_USER_PRODUCT_LOADING = "ADD_USER_PRODUCT_LOADING";
export const ADD_USER_PRODUCT_SUCCESS = "ADD_USER_PRODUCT_SUCCESS";
export const ADD_USER_PRODUCT_FAILED = "ADD_USER_PRODUCT_FAILED";

export type AddUserProductLoading = {
  type: typeof ADD_USER_PRODUCT_LOADING;
};

export type AddUserProductSuccess = {
  type: typeof ADD_USER_PRODUCT_SUCCESS;
};

export type AddUserProductFailed = {
  type: typeof ADD_USER_PRODUCT_FAILED;
  payload: string;
};

export type AddUserProductDispatchTypes =
  | AddUserProductFailed
  | AddUserProductLoading
  | AddUserProductSuccess;

export const EDIT_USER_PRODUCT_LOADING = "EDIT_USER_PRODUCT_LOADING";
export const EDIT_USER_PRODUCT_SUCCESS = "EDIT_USER_PRODUCT_SUCCESS";
export const EDIT_USER_PRODUCT_FAILED = "EDIT_USER_PRODUCT_FAILED";

export type EditUserProductLoading = {
  type: typeof EDIT_USER_PRODUCT_LOADING;
};

export type EditUserProductSuccess = {
  type: typeof EDIT_USER_PRODUCT_SUCCESS;
};

export type EditUserProductFailed = {
  type: typeof EDIT_USER_PRODUCT_FAILED;
  payload: string;
};

export type EditUserProductDispatchTypes =
  | EditUserProductFailed
  | EditUserProductLoading
  | EditUserProductSuccess;

export const UPDATE_USER_PROFILE_LOADING = "UPDATE_USER_PROFILE_LOADING";
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAILED = "UPDATE_USER_PROFILE_FAILED";

export type UpdateUserProfileLoading = {
  type: typeof UPDATE_USER_PROFILE_LOADING;
};

export type UpdateUserProfileSuccess = {
  type: typeof UPDATE_USER_PROFILE_SUCCESS;
};

export type UpdateUserProfileFailed = {
  type: typeof UPDATE_USER_PROFILE_FAILED;
  payload: string;
};

export type UpdateUserProfileDispatchTypes =
  | UpdateUserProfileFailed
  | UpdateUserProfileLoading
  | UpdateUserProfileSuccess;