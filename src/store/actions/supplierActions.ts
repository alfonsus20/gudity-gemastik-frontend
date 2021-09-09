import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  FetchSupplierDetailDispatchTypes,
  FetchSupplierListDispatchTypes,
  FETCH_SUPPLIER_DETAIL_FAILED,
  FETCH_SUPPLIER_DETAIL_LOADING,
  FETCH_SUPPLIER_DETAIL_SUCCESS,
  FETCH_SUPPLIER_LIST_FAILED,
  FETCH_SUPPLIER_LIST_LOADING,
  FETCH_SUPPLIER_LIST_SUCCESS,
} from "../constants/supplierConstants";

export const getSupplierList =
  () => async (dispatch: Dispatch<FetchSupplierListDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_SUPPLIER_LIST_LOADING });

      const { data } = await baseApi.get("/suppliers", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      dispatch({ type: FETCH_SUPPLIER_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_SUPPLIER_LIST_FAILED, payload: error.message });
      }
    }
  };

export const getSupplierDetail =
  (id: string) =>
  async (dispatch: Dispatch<FetchSupplierDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_SUPPLIER_DETAIL_LOADING });

      const { data } = await baseApi.get(`/suppliers/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      dispatch({ type: FETCH_SUPPLIER_DETAIL_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_SUPPLIER_DETAIL_FAILED,
          payload: error.message,
        });
      }
    }
  };
