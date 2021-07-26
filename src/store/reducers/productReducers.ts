import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  FetchProductDetailDispatchTypes,
  FetchSupplierProductsDispatchTypes,
  FETCH_PRODUCT_DETAIL_FAILED,
  FETCH_PRODUCT_DETAIL_LOADING,
  FETCH_PRODUCT_DETAIL_RESET,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_SUPPLIER_PRODUCTS_FAILED,
  FETCH_SUPPLIER_PRODUCTS_LOADING,
  FETCH_SUPPLIER_PRODUCTS_RESET,
  FETCH_SUPPLIER_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export type ProductState = {
  product_id: number;
  name: string;
  quality: string;
  description: string;
  thumbnail: string;
  product_commodity_type: string;
  star: number;
  price: number;
  review_count: number;
  product_total_one_star: number;
  product_two_star: number;
  product_three_star: number;
  product_four_star: number;
  product_five_star: number;
};

type SupplierProductsState = {
  loading: boolean;
  success?: boolean;
  error?: string;
  products: ProductState[];
};

type ProductDetailState = {
  loading: boolean;
  success?: boolean;
  error?: string;
  product: ProductState;
};

export const supplierProductsReducer = (
  state: SupplierProductsState = { loading: false, products: [] },
  action: FetchSupplierProductsDispatchTypes | LocationChangeAction
): SupplierProductsState => {
  switch (action.type) {
    case FETCH_SUPPLIER_PRODUCTS_LOADING:
      return { ...state, loading: true };
    case FETCH_SUPPLIER_PRODUCTS_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case FETCH_SUPPLIER_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case LOCATION_CHANGE || FETCH_SUPPLIER_PRODUCTS_RESET:
      return { loading: false, products: [] };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state: ProductDetailState = { loading: false, product: {} as ProductState },
  action: FetchProductDetailDispatchTypes | LocationChangeAction
): ProductDetailState => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_LOADING:
      return { ...state, loading: true };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case FETCH_PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case LOCATION_CHANGE || FETCH_PRODUCT_DETAIL_RESET:
      return { loading: false, product: {} as ProductState };
    default:
      return state;
  }
};