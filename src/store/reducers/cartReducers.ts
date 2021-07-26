import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  AddToCartDispatchTypes,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  FetchCartItemsDispatchTypes,
  FETCH_CART_ITEMS_FAILED,
  FETCH_CART_ITEMS_LOADING,
  FETCH_CART_ITEMS_RESET,
  FETCH_CART_ITEMS_SUCCESS,
} from "../constants/cartConstants";

export type CartState = {
  loading: boolean;
  successAddToCart?: boolean;
  successFetchCartItems?: boolean;
  error?: string;
  total: number;
  totalItems: number;
  cartItems: SupplierCartState[];
};

export type SupplierCartState = {
  supplier_id: number;
  supplier_name: string;
  products: ProductCartState[];
};

export type ProductCartState = {
  cart_id: number;
  product_id: number;
  product_quantity: number;
  product_price: number;
  product_name: string;
};

export const cartReducer = (
  state: CartState = { loading: false, cartItems: [], total: 0, totalItems: 0 },
  action:
    | AddToCartDispatchTypes
    | LocationChangeAction
    | FetchCartItemsDispatchTypes
): CartState => {
  switch (action.type) {
    case ADD_TO_CART_LOADING:
      return { ...state, loading: true };
    case ADD_TO_CART_SUCCESS:
      return { ...state, loading: false, successAddToCart: true };
    case ADD_TO_CART_FAILED:
      return {
        ...state,
        loading: false,
        successAddToCart: false,
        error: action.payload,
      };
    case FETCH_CART_ITEMS_LOADING:
      return { ...state, loading: true };
    case FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        successFetchCartItems: true,
        cartItems: action.payload,
      };
    case FETCH_CART_ITEMS_FAILED:
      return {
        ...state,
        loading: false,
        successFetchCartItems: false,
      };
    case LOCATION_CHANGE || FETCH_CART_ITEMS_RESET:
      return { loading: false, cartItems: [], total: 0, totalItems: 0 };
    default:
      return state;
  }
};
