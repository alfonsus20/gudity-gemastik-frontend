import { push } from "connected-react-router";
import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import onlyGetReq from "../../api/onlyGetReq";
import {
  CheckoutItemsDispatchTypes,
  CHECKOUT_ITEMS_FAILED,
  CHECKOUT_ITEMS_LOADING,
  CHECKOUT_ITEMS_RESET,
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

      const { data } = await onlyGetReq.get("/banks");

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
  (expedition: number, bankId: number, cartIds: number[]) =>
  async (dispatch: Dispatch<CheckoutItemsDispatchTypes>) => {
    try {
      dispatch({ type: CHECKOUT_ITEMS_LOADING });

      console.log({
        expedition_id: expedition,
        bank_id: bankId,
        carts: cartIds,
      });


      const { data } = await baseApi.post(
        `/u/invoice/create`,
        {
          expedition_id: expedition,
          bank_id: bankId,
          carts: cartIds,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );

     
      dispatch({ type: CHECKOUT_ITEMS_SUCCESS });

      // @ts-ignore
      dispatch(push(`/pembayaran/${data.data.invoice_code}`));

      dispatch({ type: CHECKOUT_ITEMS_RESET });
    } catch (error) {
      //@ts-ignore
      console.log(error.response.data.message);

      if (error instanceof Error) {
        dispatch({
          type: CHECKOUT_ITEMS_FAILED,
          payload: error.message,
        });
      }
    }
  };
