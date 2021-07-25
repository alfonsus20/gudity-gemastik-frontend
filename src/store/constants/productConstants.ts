import { ProductState } from "../reducers/productReducers";

export const FETCH_SUPPLIER_PRODUCTS_LOADING =
  "FETCH_SUPPLIER_PRODUCTS_LOADING";
export const FETCH_SUPPLIER_PRODUCTS_SUCCESS =
  "FETCH_SUPPLIER_PRODUCTS_SUCCESS";
export const FETCH_SUPPLIER_PRODUCTS_FAILED = "FETCH_SUPPLIER_PRODUCTS_FAILED";
export const FETCH_SUPPLIER_PRODUCTS_RESET = "FETCH_SUPPLIER_PRODUCTS_RESET";

interface FetchSupplierProductsLoading {
  type: typeof FETCH_SUPPLIER_PRODUCTS_LOADING;
}

interface FetchSupplierProductsSuccess {
  type: typeof FETCH_SUPPLIER_PRODUCTS_SUCCESS;
  payload: ProductState[];
}

interface FetchSupplierProductsFailed {
  type: typeof FETCH_SUPPLIER_PRODUCTS_FAILED;
  payload: string;
}

interface FetchSupplierProductsReset {
  type: typeof FETCH_SUPPLIER_PRODUCTS_RESET;
}

export type FetchSupplierProductsDispatchTypes =
  | FetchSupplierProductsLoading
  | FetchSupplierProductsSuccess
  | FetchSupplierProductsFailed
  | FetchSupplierProductsReset;
