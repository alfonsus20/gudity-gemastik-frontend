import { Dispatch } from "redux";
import onlyGetReq from "../../api/onlyGetReq";
import {
  FetchNewsDispatchTypes,
  FETCH_NEWS_FAILED,
  FETCH_NEWS_LOADING,
  FETCH_NEWS_SUCCESS,
} from "../constants/newsConstants";

export const getAllNews =
  () => async (dispatch: Dispatch<FetchNewsDispatchTypes>) => {
    try {
      dispatch({ type: FETCH_NEWS_LOADING });
      const { data } = await onlyGetReq.get("/articles?select=id,title,body");
      dispatch({ type: FETCH_NEWS_SUCCESS, payload: data.data });
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_NEWS_FAILED, payload: error.message });
      }
    }
  };
