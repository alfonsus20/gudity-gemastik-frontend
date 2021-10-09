import {
  SHOW_NEWS_MODAL,
  HIDE_NEWS_MODAL,
  NewsModalDispatchTypes,
  FetchNewsDispatchTypes,
  FETCH_NEWS_LOADING,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILED,
} from "../constants/newsConstants";

type NewsModalState = {
  title: string;
  content: string;
  shown: boolean;
};

export const newsModalReducer = (
  state: NewsModalState = { title: "", content: "", shown: false },
  action: NewsModalDispatchTypes
) => {
  switch (action.type) {
    case SHOW_NEWS_MODAL:
      return { ...action.payload, shown: true };
    case HIDE_NEWS_MODAL:
      return { title: "", content: "", shown: false };
    default:
      return state;
  }
};

export type NewsState = {
  id: number;
  title: string;
  body: string;
};

export type AllNewsState = {
  isFetchingAllNews: boolean;
  newsList: NewsState[];
  error: string;
};

export const getAllNewsReducer = (
  state: AllNewsState = { isFetchingAllNews: false, error: "", newsList: [] },
  action: FetchNewsDispatchTypes
) => {
  switch (action.type) {
    case FETCH_NEWS_LOADING:
      return { ...state, loading: true };
    case FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, newsList: action.payload };
    case FETCH_NEWS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
