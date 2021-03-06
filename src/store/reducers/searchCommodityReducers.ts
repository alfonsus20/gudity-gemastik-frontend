import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  CommodityImageClassificationDispatchTypes,
  COMMODITY_IMAGE_CLASSIFICATION_FAILED,
  COMMODITY_IMAGE_CLASSIFICATION_LOADING,
  COMMODITY_IMAGE_CLASSIFICATION_RESET,
  COMMODITY_IMAGE_CLASSIFICATION_SUCCESS,
} from "../constants/searchCommodityConstants";

export type ImageClassificationState = {
  loading: boolean;
  success?: boolean;
  error?: string;
  commodity_name: string;
  deskripsi: string;
};

export const classifyCommodityWithImageReducer = (
  state: ImageClassificationState = {
    loading: false,
    commodity_name: "",
    deskripsi: "",
  },
  action: CommodityImageClassificationDispatchTypes | LocationChangeAction
) => {
  switch (action.type) {
    case COMMODITY_IMAGE_CLASSIFICATION_LOADING:
      return { loading: true };
    case COMMODITY_IMAGE_CLASSIFICATION_SUCCESS:
      return { loading: false, success: true, ...action.payload };
    case COMMODITY_IMAGE_CLASSIFICATION_FAILED:
      return { loading: false, success: false, error: action.payload };
    case LOCATION_CHANGE:
    case COMMODITY_IMAGE_CLASSIFICATION_RESET:
      return { loading: false, commodity_name: "", deskripsi: "" };
    default:
      return state;
  }
};
