import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  AddToCartDispatchTypes,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
} from "../constants/cartConstants";

export const addToCart =
  (productId: string, quantity: number) =>
  async (dispatch: Dispatch<AddToCartDispatchTypes>) => {
    try {
      dispatch({ type: ADD_TO_CART_LOADING });

      const { data } = await baseApi.post(
        `/user/carts/create?product_id=${productId}&quantity=${quantity}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      dispatch({ type: ADD_TO_CART_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAILED,
        payload: error.message,
      });
    }
  };
