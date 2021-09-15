import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { RootState } from "..";
import baseApi from "../../api/baseApi";
import onlyGetReq from "../../api/onlyGetReq";
import {
  AddToCartDispatchTypes,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  DeleteCartItemDispatchTypes,
  DELETE_CART_ITEM_FAILED,
  DELETE_CART_ITEM_LOADING,
  DELETE_CART_ITEM_SUCCESS,
  FetchCartItemsDispatchTypes,
  FETCH_CART_ITEMS_FAILED,
  FETCH_CART_ITEMS_LOADING,
  FETCH_CART_ITEMS_SUCCESS,
} from "../constants/cartConstants";

export const addToCart =
  (productId: number, quantity: number) =>
  async (dispatch: Dispatch<AddToCartDispatchTypes>) => {
    try {
      dispatch({ type: ADD_TO_CART_LOADING });

      const { data } = await baseApi.post(
        "/u/cart",
        {
          product_id: productId,
          quantity,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );

      dispatch({ type: ADD_TO_CART_SUCCESS, payload: data.data });
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.message);
      if (error instanceof Error) {
        dispatch({
          type: ADD_TO_CART_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const fetchCartItems =
  (userId: number) =>
  async (dispatch: Dispatch<FetchCartItemsDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_CART_ITEMS_LOADING });

      const { data } = await onlyGetReq.get(
        `/carts?user_id=eq.${userId}&select=id,quantity,products(id,name,price,thumbnail,supplier_id,suppliers(name))`
      );

      console.log(data.data);

      let supplierIds = Array.from(
        new Set(data.data.map((x: any) => x.products.supplier_id))
      );

      let structured = supplierIds.map((id) => ({
        supplier_id: id,
        products: [],
        supplier_name: "",
      }));

      console.log("structured");
      console.log(structured);

      data.data.forEach((x: any) => {
        let matchedSupplier = structured.filter(
          (supplierData) => supplierData.supplier_id === x.products.supplier_id
        )[0];

        matchedSupplier.products.push({
          ...x.products,
          // @ts-ignore
          quantity: x.quantity,
          // @ts-ignore
          cart_id: x.id,
        });
        matchedSupplier.supplier_name = x.products.suppliers.name;
      });

      dispatch({ type: FETCH_CART_ITEMS_SUCCESS, payload: structured as any });
    } catch (error) {
      // @ts-ignore
      console.log(error);
      if (error instanceof Error) {
        dispatch({
          type: FETCH_CART_ITEMS_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const removeItemFromCart =
  (cartId: number, productId: number) =>
  async (
    dispatch: Dispatch<DeleteCartItemDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: DELETE_CART_ITEM_LOADING });

      await baseApi.delete(`/u/cart/${cartId}/product/${productId}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      dispatch({ type: DELETE_CART_ITEM_SUCCESS });
      toast.success("Produk dihapus dari keranjang");

      const { userInfo } = getState().auth;

      // @ts-ignore
      dispatch(fetchCartItems(userInfo.id));
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.message);
      if (error instanceof Error) {
        dispatch({
          type: DELETE_CART_ITEM_FAILED,
          payload: error.message,
        });
      }
    }
  };
