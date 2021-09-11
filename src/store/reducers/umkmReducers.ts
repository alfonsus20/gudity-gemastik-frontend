import {
  FetchUmkmListDispatchTypes,
  FETCH_UMKM_LIST_FAILED,
  FETCH_UMKM_LIST_LOADING,
  FETCH_UMKM_LIST_SUCCESS,
} from "../constants/umkmConstants";

export type UmkmState = {
  address: string;
  description: string;
  id: number;
  phone: string;
  name: string;
  thumbnail: string;
  time_closed: string;
  time_opened: string;
};

export type UmkmListState = {
  loading: boolean;
  error: string;
  umkmList: UmkmState[];
};

export const umkmListReducer = (
  state: UmkmListState = { loading: false, error: "", umkmList: [] },
  action: FetchUmkmListDispatchTypes
): UmkmListState => {
  switch (action.type) {
    case FETCH_UMKM_LIST_LOADING:
      return { ...state, loading: true };
    case FETCH_UMKM_LIST_SUCCESS:
      return { ...state, loading: false, umkmList: action.payload };
    case FETCH_UMKM_LIST_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
