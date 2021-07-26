import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  AddToCartDispatchTypes,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  FetchCartItemsDispatchTypes,
  FETCH_CART_ITEMS_FAILED,
  FETCH_CART_ITEMS_LOADING,
  FETCH_CART_ITEMS_SUCCESS,
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

export const fetchCartItems =
  () => async (dispatch: Dispatch<FetchCartItemsDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_CART_ITEMS_LOADING });

      const { data } = await baseApi.get(`/user/carts/suppliers`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const arrayOuter: any = [];

      const getSupplierProducts = async (supplier: any) => {
        const { data: dataProduct } = await baseApi.get(
          `/user/carts/suppliers/${supplier.supplier_id}/products`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        arrayOuter.push({ ...supplier, products: [...dataProduct.data] });
      };

      await Promise.all(
        data.data.map((supplier: any) => getSupplierProducts(supplier))
      );

      console.log(arrayOuter);

      dispatch({ type: FETCH_CART_ITEMS_SUCCESS, payload: arrayOuter });
    } catch (error) {
      dispatch({
        type: FETCH_CART_ITEMS_FAILED,
        payload: error.message,
      });
    }
  };
