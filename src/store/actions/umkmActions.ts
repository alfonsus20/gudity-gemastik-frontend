import { Dispatch } from "redux";
import onlyGetReq from "../../api/onlyGetReq";
import {
  FetchUmkmListDispatchTypes,
  FETCH_UMKM_LIST_FAILED,
  FETCH_UMKM_LIST_LOADING,
  FETCH_UMKM_LIST_SUCCESS,
} from "../constants/umkmConstants";

export const fetchUmkmList =
  () => async (dispatch: Dispatch<FetchUmkmListDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_UMKM_LIST_LOADING });

      const { data } = await onlyGetReq.get(
        "/stores?select=id,name,address,description,phone,thumbnail,time_closed,time_opened"
      );

      console.log(data.data)

      dispatch({ type: FETCH_UMKM_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_UMKM_LIST_FAILED, payload: error.message });
      }
    }
  };
