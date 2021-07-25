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
