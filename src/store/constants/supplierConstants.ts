import { SupplierState } from "../reducers/supplierReducers";

export const FETCH_SUPPLIER_LIST_LOADING = "FETCH_SUPPLIER_LIST_LOADING";
export const FETCH_SUPPLIER_LIST_SUCCESS = "FETCH_SUPPLIER_LIST_SUCCESS";
export const FETCH_SUPPLIER_LIST_FAILED = "FETCH_SUPPLIER_LIST_FAILED";
export const FETCH_SUPPLIER_LIST_RESET = "FETCH_SUPPLIER_LIST_RESET";

interface FetchSupplierListLoading {
  type: typeof FETCH_SUPPLIER_LIST_LOADING;
}

interface FetchSupplierListSuccess {
  type: typeof FETCH_SUPPLIER_LIST_SUCCESS;
  payload: SupplierState[];
}

interface FetchSupplierListFailed {
  type: typeof FETCH_SUPPLIER_LIST_FAILED;
  payload: string;
}

interface FetchSupplierListReset {
  type: typeof FETCH_SUPPLIER_LIST_RESET;
}

export type FetchSupplierListDispatchTypes =
  | FetchSupplierListLoading
  | FetchSupplierListSuccess
  | FetchSupplierListFailed
  | FetchSupplierListReset;

export const FETCH_SUPPLIER_DETAIL_LOADING = "FETCH_SUPPLIER_DETAIL_LOADING";
export const FETCH_SUPPLIER_DETAIL_SUCCESS = "FETCH_SUPPLIER_DETAIL_SUCCESS";
export const FETCH_SUPPLIER_DETAIL_FAILED = "FETCH_SUPPLIER_DETAIL_FAILED";
export const FETCH_SUPPLIER_DETAIL_RESET = "FETCH_SUPPLIER_DETAIL_RESET";

interface FetchSupplierDetailLoading {
  type: typeof FETCH_SUPPLIER_DETAIL_LOADING;
}

interface FetchSupplierDetailSuccess {
  type: typeof FETCH_SUPPLIER_DETAIL_SUCCESS;
  payload: SupplierState;
}

interface FetchSupplierDetailFailed {
  type: typeof FETCH_SUPPLIER_DETAIL_FAILED;
  payload: string;
}

interface FetchSupplierDetailReset {
  type: typeof FETCH_SUPPLIER_DETAIL_RESET;
}

export type FetchSupplierDetailDispatchTypes =
  | FetchSupplierDetailLoading
  | FetchSupplierDetailSuccess
  | FetchSupplierDetailFailed
  | FetchSupplierDetailReset;
