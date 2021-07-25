import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  FetchSupplierProductsDispatchTypes,
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
      dispatch({
        type: FETCH_SUPPLIER_PRODUCTS_FAILED,
        payload: error.message,
      });
    }
  };
