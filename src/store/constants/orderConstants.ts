import { OrderState } from "../reducers/orderReducers";
import { PaymentState } from "../reducers/paymentReducers";

export const FETCH_ORDER_LIST_LOADING = "FETCH_ORDER_LIST_LOADING";
export const FETCH_ORDER_LIST_SUCCESS = "FETCH_ORDER_LIST_SUCCESS";
export const FETCH_ORDER_LIST_FAILED = "FETCH_ORDER_LIST_FAILED";
export const FETCH_ORDER_LIST_RESET = "FETCH_ORDER_LIST_RESET";

interface FetchOrderListLoading {
  type: typeof FETCH_ORDER_LIST_LOADING;
}

interface FetchOrderListSuccess {
  type: typeof FETCH_ORDER_LIST_SUCCESS;
  payload: PaymentState[];
}

interface FetchOrderListFailed {
  type: typeof FETCH_ORDER_LIST_FAILED;
  payload: string;
}

interface FetchOrderListReset {
  type: typeof FETCH_ORDER_LIST_RESET;
}

export type FetchOrderListDispatchTypes =
  | FetchOrderListLoading
  | FetchOrderListSuccess
  | FetchOrderListFailed
  | FetchOrderListReset;

export const FETCH_ORDER_DETAIL_LOADING = "FETCH_ORDER_DETAIL_LOADING";
export const FETCH_ORDER_DETAIL_SUCCESS = "FETCH_ORDER_DETAIL_SUCCESS";
export const FETCH_ORDER_DETAIL_FAILED = "FETCH_ORDER_DETAIL_FAILED";
export const FETCH_ORDER_DETAIL_RESET = "FETCH_ORDER_DETAIL_RESET";

interface FetchOrderDetailLoading {
  type: typeof FETCH_ORDER_DETAIL_LOADING;
}

interface FetchOrderDetailSuccess {
  type: typeof FETCH_ORDER_DETAIL_SUCCESS;
  payload: OrderState;
}

interface FetchOrderDetailFailed {
  type: typeof FETCH_ORDER_DETAIL_FAILED;
  payload: string;
}

interface FetchOrderDetailReset {
  type: typeof FETCH_ORDER_DETAIL_RESET;
}

export type FetchOrderDetailDispatchTypes =
  | FetchOrderDetailLoading
  | FetchOrderDetailSuccess
  | FetchOrderDetailFailed
  | FetchOrderDetailReset;

export const UPDATE_ORDER_STATUS_LOADING = "UPDATE_ORDER_STATUS_LOADING";
export const UPDATE_ORDER_STATUS_SUCCESS = "UPDATE_ORDER_STATUS_SUCCESS";
export const UPDATE_ORDER_STATUS_FAILED = "UPDATE_ORDER_STATUS_FAILED";
export const UPDATE_ORDER_STATUS_RESET = "UPDATE_ORDER_STATUS_RESET";

interface UpdateOrderStatusLoading {
  type: typeof UPDATE_ORDER_STATUS_LOADING;
}

interface UpdateOrderStatusSuccess {
  type: typeof UPDATE_ORDER_STATUS_SUCCESS;
}

interface UpdateOrderStatusFailed {
  type: typeof UPDATE_ORDER_STATUS_FAILED;
  payload: string;
}

interface UpdateOrderStatusReset {
  type: typeof UPDATE_ORDER_STATUS_RESET;
}

export type UpdateOrderStatusDispatchTypes =
  | UpdateOrderStatusLoading
  | UpdateOrderStatusSuccess
  | UpdateOrderStatusFailed
  | UpdateOrderStatusReset;
