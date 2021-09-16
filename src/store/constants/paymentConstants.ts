import {  PaymentState } from "../reducers/paymentReducers";

export const FETCH_PAYMENT_DETAIL_LOADING = "FETCH_PAYMENT_DETAIL_LOADING";
export const FETCH_PAYMENT_DETAIL_SUCCESS = "FETCH_PAYMENT_DETAIL_SUCCESS";
export const FETCH_PAYMENT_DETAIL_FAILED = "FETCH_PAYMENT_DETAIL_FAILED";
export const FETCH_PAYMENT_DETAIL_RESET = "FETCH_PAYMENT_DETAIL_RESET";

interface FetchPaymentDetailLoading {
  type: typeof FETCH_PAYMENT_DETAIL_LOADING;
}

interface FetchPaymentDetailSuccess {
  type: typeof FETCH_PAYMENT_DETAIL_SUCCESS;
  payload: PaymentState;
}

interface FetchPaymentDetailFailed {
  type: typeof FETCH_PAYMENT_DETAIL_FAILED;
  payload: string;
}

interface FetchPaymentDetailReset {
  type: typeof FETCH_PAYMENT_DETAIL_RESET;
}

export type FetchPaymentDetailDispatchTypes =
  | FetchPaymentDetailLoading
  | FetchPaymentDetailSuccess
  | FetchPaymentDetailFailed
  | FetchPaymentDetailReset;
