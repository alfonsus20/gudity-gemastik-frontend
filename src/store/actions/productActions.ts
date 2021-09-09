import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  FetchProductDetailDispatchTypes,
  FetchSupplierProductsDispatchTypes,
  FETCH_PRODUCT_DETAIL_FAILED,
  FETCH_PRODUCT_DETAIL_LOADING,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_SUPPLIER_PRODUCTS_FAILED,
  FETCH_SUPPLIER_PRODUCTS_LOADING,
  FETCH_SUPPLIER_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const getSupplierProducts =
  (supplierId: string) =>
  async (dispatch: Dispatch<FetchSupplierProductsDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_SUPPLIER_PRODUCTS_LOADING });

      const { data } = await baseApi.get(`/suppliers/${supplierId}/products`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      dispatch({ type: FETCH_SUPPLIER_PRODUCTS_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_SUPPLIER_PRODUCTS_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const getProductDetail =
  (supplierId: string, productId: string) =>
  async (dispatch: Dispatch<FetchProductDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_PRODUCT_DETAIL_LOADING });

      const { data } = await baseApi.get(
        `/suppliers/${supplierId}/products/${productId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      dispatch({ type: FETCH_PRODUCT_DETAIL_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_PRODUCT_DETAIL_FAILED,
          payload: error.message,
        });
      }
    }
  };
