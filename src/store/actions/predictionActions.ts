import { Dispatch } from "react";
import mlApi from "../../api/mlApi";
import {
  FutureAnalysisDispatchTypes,
  FUTURE_ANALYSIS_FAILED,
  FUTURE_ANALYSIS_LOADING,
  FUTURE_ANALYSIS_SUCCESS,
} from "../constants/predictionConstants";

export const getFutureAnalysis =
  (commodity: string, day: string) =>
  async (dispatch: Dispatch<FutureAnalysisDispatchTypes>) => {
    try {
      dispatch({ type: FUTURE_ANALYSIS_LOADING });

      const { data } = await mlApi.get(
        `/commodity/predict?commodity_name=${commodity}&day=${day}`
      );

      dispatch({ type: FUTURE_ANALYSIS_SUCCESS, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: FUTURE_ANALYSIS_FAILED, payload: error.message });
      }
    }
  };
