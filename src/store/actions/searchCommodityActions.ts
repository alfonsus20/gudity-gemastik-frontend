import { Dispatch } from "react";
import mlApi from "../../api/mlApi";
import {
  CommodityImageClassificationDispatchTypes,
  COMMODITY_IMAGE_CLASSIFICATION_LOADING,
  COMMODITY_IMAGE_CLASSIFICATION_SUCCESS,
  COMMODITY_IMAGE_CLASSIFICATION_FAILED,
} from "../constants/searchCommodityConstants";

export const classifyCommodityWithImage =
  (commodity_image: File) =>
  async (dispatch: Dispatch<CommodityImageClassificationDispatchTypes>) => {
    try {
      dispatch({ type: COMMODITY_IMAGE_CLASSIFICATION_LOADING });

      const formData = new FormData();
      formData.append("commodity_image", commodity_image);

      const { data } = await mlApi.post("/commodity_image/predict", formData);

      dispatch({
        type: COMMODITY_IMAGE_CLASSIFICATION_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: COMMODITY_IMAGE_CLASSIFICATION_FAILED,
        payload: error.message,
      });
    }
  };
