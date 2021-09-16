import {
  ADD_CHECKOUT_ITEM,
  ChangeCheckoutItemsDispatchTypes,
  CheckoutItemsDispatchTypes,
  CHECKOUT_ITEMS_FAILED,
  CHECKOUT_ITEMS_LOADING,
  CHECKOUT_ITEMS_RESET,
  CHECKOUT_ITEMS_SUCCESS,
  FetchBankListDispatchTypes,
  FETCH_BANK_LIST_FAILED,
  FETCH_BANK_LIST_LOADING,
  FETCH_BANK_LIST_SUCCESS,
  REMOVE_CHECKOUT_ITEM,
} from "../constants/checkoutConstants";
import { ProductCartState } from "./cartReducers";

type CheckoutState = {
  error?: string;
  successFetchBanks?: boolean;
  loading: boolean;
  productsCheckout: ProductCartState[];
  bankList: BankState[];
  paymentCode?: string;
};

export type BankState = {
  id: number;
  name: string;
};

export const checkoutReducer = (
  state: CheckoutState = { loading: false, productsCheckout: [], bankList: [] },
  action:
    | ChangeCheckoutItemsDispatchTypes
    | FetchBankListDispatchTypes
    | CheckoutItemsDispatchTypes
): CheckoutState => {
  switch (action.type) {
    case ADD_CHECKOUT_ITEM:
      return {
        ...state,
        productsCheckout: [...state.productsCheckout, action.payload],
      };
    case REMOVE_CHECKOUT_ITEM:
      return {
        ...state,
        productsCheckout: state.productsCheckout.filter(
          (product) => product.cart_id !== action.payload.cart_id
        ),
      };
    case FETCH_BANK_LIST_LOADING:
    case CHECKOUT_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BANK_LIST_SUCCESS:
      return {
        ...state,
        successFetchBanks: true,
        bankList: action.payload,
      };
    case FETCH_BANK_LIST_FAILED:
      return {
        ...state,
        successFetchBanks: false,
        error: action.payload,
      };
    case CHECKOUT_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CHECKOUT_ITEMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHECKOUT_ITEMS_RESET:
      return {
        ...state,
        productsCheckout: [],
      };
    default:
      return state;
  }
};
