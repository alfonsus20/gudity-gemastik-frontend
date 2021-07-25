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
