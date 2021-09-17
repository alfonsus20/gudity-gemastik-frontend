import {
  FetchPaymentDetailDispatchTypes,
  FETCH_PAYMENT_DETAIL_FAILED,
  FETCH_PAYMENT_DETAIL_LOADING,
  FETCH_PAYMENT_DETAIL_RESET,
  FETCH_PAYMENT_DETAIL_SUCCESS,
} from "../constants/paymentConstants";

export type PaymentProductState = {
  id: number;
  name: string;
  thumbnail: string;
  quantity: number;
  price: number;
};

export type PaymentState = {
  id: number;
  code: string;
  bankName: string;
  date: string;
  expedition: string;
  supplierName: string;
  supplierAddress: string;
  paymentStatus: string;
  products: PaymentProductState[];
  totalPrice: number;
};

export type PaymentDetailState = {
  loading: boolean;
  error: string;
  payment: PaymentState;
};

export const paymentReducer = (
  state: PaymentDetailState = {
    error: "",
    loading: false,
    payment: {} as PaymentState,
  },
  action: FetchPaymentDetailDispatchTypes
): PaymentDetailState => {
  switch (action.type) {
    case FETCH_PAYMENT_DETAIL_LOADING:
      return { ...state, loading: false };
    case FETCH_PAYMENT_DETAIL_SUCCESS:
      return { ...state, loading: false, payment: action.payload };
    case FETCH_PAYMENT_DETAIL_FAILED:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PAYMENT_DETAIL_RESET:
      return { error: "", loading: false, payment: {} as PaymentState };
    default:
      return state;
  }
};
