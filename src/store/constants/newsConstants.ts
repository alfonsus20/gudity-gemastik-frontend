import { NewsModalProps } from "../../components/modal/NewsModal";

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
