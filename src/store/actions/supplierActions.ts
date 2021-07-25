import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  FetchSupplierListDispatchTypes,
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
      console.log(data);
    } catch (error) {
      dispatch({ type: FETCH_SUPPLIER_LIST_FAILED, payload: error.message });
      console.log(error.message);
    }
  };
