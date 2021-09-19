import { Dispatch } from "redux";
import { RootState } from "..";
import onlyGetReq from "../../api/onlyGetReq";
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
  () =>
  async (
    dispatch: Dispatch<FetchSupplierListDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: FETCH_SUPPLIER_LIST_LOADING });

      const { userInfo } = getState().auth;

      const { data } = await onlyGetReq.get(
        `/suppliers?select=id,address,description,name,phone,thumbnail,username:users(name)${
          userInfo.id ? "&user_id=not.eq." + userInfo.id : ""
        }`
      );

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

      const { data } = await onlyGetReq.get(
        `/suppliers?select=id,address,description,name,phone,thumbnail,username%3Ausers(name)&id=eq.${id}`
      );

      if (data.data.length > 0) {
        dispatch({
          type: FETCH_SUPPLIER_DETAIL_SUCCESS,
          payload: data.data[0],
        });
      } else {
        throw new Error("tidak ditemukan");
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_SUPPLIER_DETAIL_FAILED,
          payload: error.message,
        });
      }
    }
  };
