export const FETCH_ORDER_LIST_LOADING = "FETCH_ORDER_LIST_LOADING";
export const FETCH_ORDER_LIST_SUCCESS = "FETCH_ORDER_LIST_SUCCESS";
export const FETCH_ORDER_LIST_FAILED = "FETCH_ORDER_LIST_FAILED";
export const FETCH_ORDER_LIST_RESET = "FETCH_ORDER_LIST_RESET";

interface FetchOrderListLoading {
  type: typeof FETCH_ORDER_LIST_LOADING;
}

interface FetchOrderListSuccess {
  type: typeof FETCH_ORDER_LIST_SUCCESS;
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
