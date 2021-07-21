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
  payload: object;
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
