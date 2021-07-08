import {
  SHOW_NEWS_MODAL,
  HIDE_NEWS_MODAL,
  NewsModalDispatchTypes,
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
      return { ...state, shown: true };
    default:
      return state;
  }
};
