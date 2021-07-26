import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
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
  loading: false;
  orderList: OrderDetailState[];
};

export type OrderState = {
  id: number;
  total_payment: number;
  code: string;
  payment_bank: string;
  expedition: string;
  created_at: string;
  updated_at: string;
  products: PurchasedProductState[];
};

export type OrderDetailState = {
  error?: string;
  success?: boolean;
  loading: false;
  order: OrderState;
};

export const orderListReducer = (
  state: OrderListState = {
    loading: false,
    orderList: [],
  },
  action: FetchOrderListDispatchTypes | LocationChangeAction
): OrderListState => {
  switch (action.type) {
    case FETCH_ORDER_LIST_LOADING:
      return {
        ...state,
      };
    case FETCH_ORDER_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        orderList: action.payload,
      };
    case FETCH_ORDER_LIST_FAILED:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    case LOCATION_CHANGE:
      return {
        loading: false,
        orderList: [],
      };
    default:
      return state;
  }
};

export const orderDetailReducer = (
  state: OrderDetailState = {
    loading: false,
    // @ts-ignore
    order: { products: [] },
  },
  action: FetchOrderDetailDispatchTypes | LocationChangeAction
): OrderDetailState => {
  switch (action.type) {
    case FETCH_ORDER_DETAIL_LOADING:
      return {
        ...state,
      };
    case FETCH_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        success: true,
        order: action.payload,
      };
    case FETCH_ORDER_DETAIL_FAILED:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    case LOCATION_CHANGE:
      return {
        loading: false,
        // @ts-ignore
        order: { products: [] } as OrderState,
      };
    default:
      return state;
  }
};
