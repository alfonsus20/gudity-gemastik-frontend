import {
  ProductState,
  SupplierProductState,
} from "../reducers/productReducers";

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
  payload: SupplierProductState[];
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

export const FETCH_PRODUCT_DETAIL_LOADING = "FETCH_PRODUCT_DETAIL_LOADING";
export const FETCH_PRODUCT_DETAIL_SUCCESS = "FETCH_PRODUCT_DETAIL_SUCCESS";
export const FETCH_PRODUCT_DETAIL_FAILED = "FETCH_PRODUCT_DETAIL_FAILED";
export const FETCH_PRODUCT_DETAIL_RESET = "FETCH_PRODUCT_DETAIL_RESET";

interface FetchProductDetailLoading {
  type: typeof FETCH_PRODUCT_DETAIL_LOADING;
}

interface FetchProductDetailSuccess {
  type: typeof FETCH_PRODUCT_DETAIL_SUCCESS;
  payload: ProductState;
}

interface FetchProductDetailFailed {
  type: typeof FETCH_PRODUCT_DETAIL_FAILED;
  payload: string;
}

interface FetchProductDetailReset {
  type: typeof FETCH_PRODUCT_DETAIL_RESET;
}

export type FetchProductDetailDispatchTypes =
  | FetchProductDetailLoading
  | FetchProductDetailSuccess
  | FetchProductDetailFailed
  | FetchProductDetailReset;
