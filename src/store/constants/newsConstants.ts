import { NewsModalProps } from "../../components/modal/NewsModal";
import { NewsState } from "../reducers/newsReducer";

export const SHOW_NEWS_MODAL = "SHOW_NEWS_MODAL";
export const HIDE_NEWS_MODAL = "HIDE_NEWS_MODAL";

export interface NewsModalShown {
  type: typeof SHOW_NEWS_MODAL;
  payload: NewsModalProps;
}

export interface NewsModalHidden {
  type: typeof HIDE_NEWS_MODAL;
}

export type NewsModalDispatchTypes = NewsModalShown | NewsModalHidden;

export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_LOADING = "FETCH_NEWS_LOADING";
export const FETCH_NEWS_FAILED = "FETCH_NEWS_FAILED";

export interface FetchNewsSuccess {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: NewsState[];
}

export interface FetchNewsLoading {
  type: typeof FETCH_NEWS_LOADING;
}

export interface FetchNewsFailed {
  type: typeof FETCH_NEWS_FAILED;
  payload: string;
}

export type FetchNewsDispatchTypes =
  | FetchNewsSuccess
  | FetchNewsLoading
  | FetchNewsFailed;
