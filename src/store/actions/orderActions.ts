import { Dispatch } from "redux";
import baseApi from "../../api/baseApi";
import onlyGetReq from "../../api/onlyGetReq";
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
import { PaymentState } from "../reducers/paymentReducers";

export const getOrderList =
  (userId: number) =>
  async (dispatch: Dispatch<FetchOrderListDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_ORDER_LIST_LOADING });

      const { data } = await onlyGetReq.get(
        `/invoices?select=id,code,created_at,banks(name),expeditions(name),invoice_statuses(name),invoice_products(quantity,products(id,name,price,quality,thumbnail,suppliers(name,address)))&user_id=eq.${userId}`
      );

      let structuredArray: any = [];

      data.data.forEach((order: any) => {
        let supplierName = "",
          supplierAddress = "",
          totalPrice = 0;
        let productStructured = order.invoice_products.map((product: any) => {
          supplierName = product.products.suppliers.name;
          supplierAddress = product.products.suppliers.address;
          totalPrice += product.products.price * product.quantity;
          return { ...product.products, quantity: product.quantity };
        });
        let structured: PaymentState = {
          id: order.id,
          bankName: order.banks.name,
          code: order.code,
          date: order.created_at,
          expedition: order.expeditions.name,
          products: productStructured,
          paymentStatus: order.invoice_statuses.name,
          supplierName,
          supplierAddress,
          totalPrice,
        };
        structuredArray.push(structured);
      });

      dispatch({ type: FETCH_ORDER_LIST_SUCCESS, payload: structuredArray });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_ORDER_LIST_FAILED, payload: error.message });
      }
    }
  };

export const getOrderDetail =
  (paymentCode: string) =>
  async (dispatch: Dispatch<FetchOrderDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_ORDER_DETAIL_LOADING });

      const { data } = await onlyGetReq.get(
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
