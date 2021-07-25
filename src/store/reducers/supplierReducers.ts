import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  FetchSupplierListDispatchTypes,
  FETCH_SUPPLIER_LIST_FAILED,
  FETCH_SUPPLIER_LIST_LOADING,
  FETCH_SUPPLIER_LIST_RESET,
  FETCH_SUPPLIER_LIST_SUCCESS,
} from "../constants/supplierConstants";

type SupplierListState = {
  loading: boolean;
  error?: string;
  success?: boolean;
  suppliers: SupplierState[];
};

export type SupplierState = {
  supplier_id: number;
  supplier_image: string;
  supplier_owner_name: string;
  supplier_store_name: string;
  supplier_address: string;
  supplier_phone: string;
  supplier_description: string;
};

export const supplierListReducer = (
  state: SupplierListState = { loading: false, suppliers: [] },
  action: FetchSupplierListDispatchTypes | LocationChangeAction
): SupplierListState => {
  switch (action.type) {
    case FETCH_SUPPLIER_LIST_LOADING:
      return { ...state, loading: true };
    case FETCH_SUPPLIER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        suppliers: action.payload,
      };
    case FETCH_SUPPLIER_LIST_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case LOCATION_CHANGE || FETCH_SUPPLIER_LIST_RESET:
      return { loading: false, suppliers: [] };
    default:
      return state;
  }
};
