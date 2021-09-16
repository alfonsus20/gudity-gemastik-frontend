import { ProductCartState } from "../reducers/cartReducers";
import { BankState } from "../reducers/checkoutReducers";

export const ADD_CHECKOUT_ITEM = "ADD_CHECKOUT_ITEM";
export const REMOVE_CHECKOUT_ITEM = "REMOVE_CHECKOUT_ITEM";

interface AddCheckoutItem {
  type: typeof ADD_CHECKOUT_ITEM;
  payload: ProductCartState;
}

interface RemoveCheckoutItem {
  type: typeof REMOVE_CHECKOUT_ITEM;
  payload: ProductCartState;
}

export type ChangeCheckoutItemsDispatchTypes =
  | AddCheckoutItem
  | RemoveCheckoutItem;

export const FETCH_BANK_LIST_LOADING = "FETCH_BANK_LIST_LOADING";
export const FETCH_BANK_LIST_SUCCESS = "FETCH_BANK_LIST_SUCCESS";
export const FETCH_BANK_LIST_FAILED = "FETCH_BANK_LIST_FAILED";
export const FETCH_BANK_LIST_RESET = "FETCH_BANK_LIST_RESET";

interface FetchBankListLoading {
  type: typeof FETCH_BANK_LIST_LOADING;
}

interface FetchBankListSuccess {
  type: typeof FETCH_BANK_LIST_SUCCESS;
  payload: BankState[];
}

interface FetchBankListFailed {
  type: typeof FETCH_BANK_LIST_FAILED;
  payload: string;
}

interface FetchBankListReset {
  type: typeof FETCH_BANK_LIST_RESET;
}

export type FetchBankListDispatchTypes =
  | FetchBankListLoading
  | FetchBankListSuccess
  | FetchBankListFailed
  | FetchBankListReset;

export const CHECKOUT_ITEMS_LOADING = "CHECKOUT_ITEMS_LOADING";
export const CHECKOUT_ITEMS_SUCCESS = "CHECKOUT_ITEMS_SUCCESS";
export const CHECKOUT_ITEMS_FAILED = "CHECKOUT_ITEMS_FAILED";
export const CHECKOUT_ITEMS_RESET = "CHECKOUT_ITEMS_RESET";

interface CheckoutItemsLoading {
  type: typeof CHECKOUT_ITEMS_LOADING;
}

interface CheckoutItemsSuccess {
  type: typeof CHECKOUT_ITEMS_SUCCESS;
}

interface CheckoutItemsFailed {
  type: typeof CHECKOUT_ITEMS_FAILED;
  payload: string;
}

interface CheckoutItemsReset {
  type: typeof CHECKOUT_ITEMS_RESET;
}

export type CheckoutItemsDispatchTypes =
  | CheckoutItemsLoading
  | CheckoutItemsSuccess
  | CheckoutItemsFailed
  | CheckoutItemsReset;
