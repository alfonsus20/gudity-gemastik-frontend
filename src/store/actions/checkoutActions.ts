import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  CheckoutItemsDispatchTypes,
  CHECKOUT_ITEMS_FAILED,
  CHECKOUT_ITEMS_LOADING,
  CHECKOUT_ITEMS_SUCCESS,
  FetchBankListDispatchTypes,
  FETCH_BANK_LIST_FAILED,
  FETCH_BANK_LIST_LOADING,
  FETCH_BANK_LIST_SUCCESS,
} from "../constants/checkoutConstants";

export const getBankList =
  () => async (dispatch: Dispatch<FetchBankListDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_BANK_LIST_LOADING });

      const { data } = await baseApi.get(`/banks`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      dispatch({ type: FETCH_BANK_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_BANK_LIST_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const checkoutItems =
  (expedition: string, bankId: number, cartIds: number[]) =>
  async (dispatch: Dispatch<CheckoutItemsDispatchTypes>) => {
    try {
      dispatch({ type: CHECKOUT_ITEMS_LOADING });

      const { data } = await baseApi.post(
        `/user/invoices/checkout`,
        {
          invoice_expedition: expedition,
          invoice_bank_id: bankId,
          invoice_cart_ids: cartIds,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      dispatch({ type: CHECKOUT_ITEMS_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: CHECKOUT_ITEMS_FAILED,
          payload: error.message,
        });
      }
    }
  };
