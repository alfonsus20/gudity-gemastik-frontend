import { SupplierCartState } from "../reducers/cartReducers";

export const ADD_TO_CART_LOADING = "ADD_TO_CART_LOADING";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILED = "ADD_TO_CART_FAILED";
export const ADD_TO_CART_RESET = "ADD_TO_CART_RESET";

interface AddToCartLoading {
  type: typeof ADD_TO_CART_LOADING;
}

interface AddToCartSuccess {
  type: typeof ADD_TO_CART_SUCCESS;
}

interface AddToCartFailed {
  type: typeof ADD_TO_CART_FAILED;
  payload: string;
}

interface AddToCartReset {
  type: typeof ADD_TO_CART_RESET;
}

export type AddToCartDispatchTypes =
  | AddToCartLoading
  | AddToCartSuccess
  | AddToCartFailed
  | AddToCartReset;

export const FETCH_CART_ITEMS_LOADING = "FETCH_CART_ITEMS_LOADING";
export const FETCH_CART_ITEMS_SUCCESS = "FETCH_CART_ITEMS_SUCCESS";
export const FETCH_CART_ITEMS_FAILED = "FETCH_CART_ITEMS_FAILED";
export const FETCH_CART_ITEMS_RESET = "FETCH_CART_ITEMS_RESET";

interface FetchCartItemsLoading {
  type: typeof FETCH_CART_ITEMS_LOADING;
}

interface FetchCartItemsSuccess {
  type: typeof FETCH_CART_ITEMS_SUCCESS;
  payload: SupplierCartState[];
}

interface FetchCartItemsFailed {
  type: typeof FETCH_CART_ITEMS_FAILED;
  payload: string;
}

interface FetchCartItemsReset {
  type: typeof FETCH_CART_ITEMS_RESET;
}

export type FetchCartItemsDispatchTypes =
  | FetchCartItemsLoading
  | FetchCartItemsSuccess
  | FetchCartItemsFailed
  | FetchCartItemsReset;

export const INCREASE_TOTAL = "INCREASE_TOTAL";
export const DECREASE_TOTAL = "DECREASE_TOTAL";
export const RESET_TOTAL = "RESET_TOTAL";

interface IncreaseTotal {
  type: typeof INCREASE_TOTAL;
  payload: number;
}
