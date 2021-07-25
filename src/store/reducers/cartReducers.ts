import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  AddToCartDispatchTypes,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_RESET,
  ADD_TO_CART_SUCCESS,
} from "../constants/cartConstants";

type CartState = {
  loading: boolean;
  successAddToCart?: boolean;
  error?: string;
};

export const cartReducer = (
  state: CartState = { loading: false },
  action: AddToCartDispatchTypes | LocationChangeAction
): CartState => {
  switch (action.type) {
    case ADD_TO_CART_LOADING:
      return { loading: true };
    case ADD_TO_CART_SUCCESS:
      return { loading: false, successAddToCart: true };
    case ADD_TO_CART_FAILED:
      return { loading: false, successAddToCart: false, error: action.payload };
    case LOCATION_CHANGE || ADD_TO_CART_RESET:
      return { loading: false };
    default:
      return state;
  }
};
