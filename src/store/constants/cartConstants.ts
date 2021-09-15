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

export const DELETE_CART_ITEM_LOADING = "DELETE_CART_ITEM_LOADING";
export const DELETE_CART_ITEM_SUCCESS = "DELETE_CART_ITEM_SUCCESS";
export const DELETE_CART_ITEM_FAILED = "DELETE_CART_ITEM_FAILED";
export const DELETE_CART_ITEM_RESET = "DELETE_CART_ITEM_RESET";

interface DeleteCartItemLoading {
  type: typeof DELETE_CART_ITEM_LOADING;
}

interface DeleteCartItemSuccess {
  type: typeof DELETE_CART_ITEM_SUCCESS;
}

interface DeleteCartItemFailed {
  type: typeof DELETE_CART_ITEM_FAILED;
  payload: string;
}

interface DeleteCartItemReset {
  type: typeof DELETE_CART_ITEM_RESET;
}

export type DeleteCartItemDispatchTypes =
  | DeleteCartItemLoading
  | DeleteCartItemSuccess
  | DeleteCartItemFailed
  | DeleteCartItemReset;

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
