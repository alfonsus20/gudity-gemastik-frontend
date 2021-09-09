import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import {
  FetchOrderDetailDispatchTypes,
  FetchOrderListDispatchTypes,
  FETCH_ORDER_DETAIL_FAILED,
  FETCH_ORDER_DETAIL_LOADING,
  FETCH_ORDER_DETAIL_SUCCESS,
  FETCH_ORDER_LIST_FAILED,
  FETCH_ORDER_LIST_LOADING,
  FETCH_ORDER_LIST_SUCCESS,
} from "../constants/orderConstants";

export const getOrderList =
  () => async (dispatch: Dispatch<FetchOrderListDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_ORDER_LIST_LOADING });

      const { data } = await baseApi.get("/user/invoices/accepted", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const arrayOuter: any = [];

      const getOrderProducts = async (order: any) => {
        const { data: dataProduct } = await baseApi.get(
          `/user/invoices/${order.code}/products`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        arrayOuter.push({ ...order, products: [...dataProduct.data] });
      };

      await Promise.all(data.data.map((order: any) => getOrderProducts(order)));

      dispatch({ type: FETCH_ORDER_LIST_SUCCESS, payload: arrayOuter });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_ORDER_LIST_FAILED,
          payload: error.message,
        });
      }
    }
  };

export const getOrderDetail =
  (paymentCode: string) =>
  async (dispatch: Dispatch<FetchOrderDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_ORDER_DETAIL_LOADING });

      const { data } = await baseApi.get(
        `/user/invoices/${paymentCode}/detail`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      const { data: dataProduct } = await baseApi.get(
        `/user/invoices/${paymentCode}/products`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch({
        type: FETCH_ORDER_DETAIL_SUCCESS,
        payload: { ...data.data, products: dataProduct.data },
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: FETCH_ORDER_DETAIL_FAILED,
          payload: error.message,
        });
      }
    }
  };
