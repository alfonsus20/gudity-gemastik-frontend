import { ReviewProductState } from "../../components/card/ReviewCard";
import {
  FetchOrderDetailDispatchTypes,
  FetchOrderListDispatchTypes,
  FetchOrderReviewDispatchTypes,
  FETCH_ORDER_DETAIL_FAILED,
  FETCH_ORDER_DETAIL_LOADING,
  FETCH_ORDER_DETAIL_SUCCESS,
  FETCH_ORDER_LIST_FAILED,
  FETCH_ORDER_LIST_LOADING,
  FETCH_ORDER_LIST_SUCCESS,
  FETCH_ORDER_REVIEW_FAILED,
  FETCH_ORDER_REVIEW_LOADING,
  FETCH_ORDER_REVIEW_SUCCESS,
  UpdateOrderStatusDispatchTypes,
  UPDATE_ORDER_STATUS_FAILED,
  UPDATE_ORDER_STATUS_LOADING,
} from "../constants/orderConstants";
import { PaymentState } from "./paymentReducers";

export type PurchasedProductState = {
  product_id: number;
  product_price: number;
  product_quantity: number;
  is_reviewed: number;
  product_image: string;
  product_name: string;
};

type OrderListState = {
  error?: string;
  success?: boolean;
  loading: boolean;
  orderList: PaymentState[];
};

export type OrderState = {
  id: number;
  supplierName: string;
  products: ReviewProductState[];
};

export type OrderDetailState = {
  loading: boolean;
  error?: string;
  order: OrderState;
};

export const orderListReducer = (
  state: OrderListState = {
    loading: false,
    orderList: [],
  },
  action: FetchOrderListDispatchTypes | UpdateOrderStatusDispatchTypes
): OrderListState => {
  switch (action.type) {
    case FETCH_ORDER_LIST_LOADING:
    case UPDATE_ORDER_STATUS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDER_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        orderList: action.payload,
      };
    case FETCH_ORDER_LIST_FAILED:
    case UPDATE_ORDER_STATUS_FAILED:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailReducer = (
  state: OrderDetailState = {
    loading: false,
    order: {} as OrderState,
  },
  action: FetchOrderDetailDispatchTypes | FetchOrderReviewDispatchTypes
): OrderDetailState => {
  switch (action.type) {
    case FETCH_ORDER_DETAIL_LOADING:
    case FETCH_ORDER_REVIEW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case FETCH_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ORDER_DETAIL_FAILED:
    case FETCH_ORDER_REVIEW_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
