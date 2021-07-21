import { Dispatch } from "react";
import mlApi from "../../api/mlApi";
import {
  PastAnalysisDispatchTypes,
  PAST_ANALYSIS_FAILED,
  PAST_ANALYSIS_LOADING,
  PAST_ANALYSIS_SUCCESS,
} from "../constants/analysisConstants";

export const getPastAnalysis =
  (commodity: string, day: string) =>
  async (dispatch: Dispatch<PastAnalysisDispatchTypes>) => {
    try {
      dispatch({ type: PAST_ANALYSIS_LOADING });

      const { data } = await mlApi.get(
        `/commodity?commodity_name=${commodity}&day=${day}`
      );

      dispatch({ type: PAST_ANALYSIS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: PAST_ANALYSIS_FAILED, payload: error.message });
    }
  };
