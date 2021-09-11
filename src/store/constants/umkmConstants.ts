import { UmkmListState, UmkmState } from "../reducers/umkmReducers";

export const FETCH_UMKM_LIST_LOADING = "FETCH_UMKM_LIST_LOADING";
export const FETCH_UMKM_LIST_SUCCESS = "FETCH_UMKM_LIST_SUCCESS";
export const FETCH_UMKM_LIST_FAILED = "FETCH_UMKM_LIST_FAILED";

export interface FetchUmkmListLoading {
  type: typeof FETCH_UMKM_LIST_LOADING;
}

export interface FetchUmkmListSuccess {
  type: typeof FETCH_UMKM_LIST_SUCCESS;
  payload: UmkmState[];
}

export interface FetchUmkmListFailed {
  type: typeof FETCH_UMKM_LIST_FAILED;
  payload: string;
}

export type FetchUmkmListDispatchTypes =
  | FetchUmkmListFailed
  | FetchUmkmListLoading
  | FetchUmkmListSuccess;
