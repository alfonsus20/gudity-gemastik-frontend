import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { RootState } from "..";
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
  PostReviewDispatchTypes,
  POST_REVIEW_FAILED,
  POST_REVIEW_LOADING,
  POST_REVIEW_SUCCESS,
  UpdateOrderStatusDispatchTypes,
  UPDATE_ORDER_STATUS_FAILED,
  UPDATE_ORDER_STATUS_LOADING,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../constants/orderConstants";
import { OrderState } from "../reducers/orderReducers";
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
  (orderId: string, userId: number) =>
  async (dispatch: Dispatch<FetchOrderDetailDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_ORDER_DETAIL_LOADING });

      const { data } = await onlyGetReq.get(
        `/invoices?select=id,invoice_products(id,quantity,products(name,suppliers(*),price,thumbnail),invoice_product_reviews(review,rating:star))&user_id=eq.${userId}&id=eq.${orderId}`
      );

      let reviewData: any = data.data[0];
      let supplierName = "";

      let productStructured = reviewData.invoice_products.map(
        (product: any) => {
          supplierName = product.products.suppliers.name;
          return {
            ...product.products,
            id: product.id,
            quantity: product.quantity,
            review: product.invoice_product_reviews[0],
          };
        }
      );

      let structured: OrderState = {
        id: reviewData.id,
        supplierName,
        products: productStructured,
      };

      dispatch({ type: FETCH_ORDER_DETAIL_SUCCESS, payload: structured });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_ORDER_DETAIL_FAILED, payload: error.message });
      }
    }
  };

export const updateOrderStatus =
  (paymentCode: string, status: "shipped" | "accepted") =>
  async (
    dispatch: Dispatch<UpdateOrderStatusDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_LOADING });

      await baseApi.patch(
        `/u/invoice/${paymentCode}/${status}`,
        {},
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS });

      if (status === "shipped") {
        toast.success("Pembayaran Berhasil Dilakukan");
      } else {
        toast.success("Pesanan Berhasil Diterima");
      }

      const { userInfo } = getState().auth;

      // @ts-ignore
      dispatch(getOrderList(userInfo.id));
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: UPDATE_ORDER_STATUS_FAILED, payload: error.message });
      }
    }
  };

export const postReview =
  (body: any) =>
  async (
    dispatch: Dispatch<PostReviewDispatchTypes>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: POST_REVIEW_LOADING });

      await baseApi.post("/u/invoice/product_review", body, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      dispatch({ type: POST_REVIEW_SUCCESS });
      toast.success("Review Berhasil Dikirim");

      const {
        auth: { userInfo },
        orderDetail: { order },
      } = getState();

      // @ts-ignore
      dispatch(getOrderDetail(order.id, userInfo.id));
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: POST_REVIEW_FAILED, payload: error.message });
      }
    }
  };
