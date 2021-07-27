import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  FutureAnalysisDispatchTypes,
  FUTURE_ANALYSIS_FAILED,
  FUTURE_ANALYSIS_LOADING,
  FUTURE_ANALYSIS_RESET,
  FUTURE_ANALYSIS_SUCCESS,
} from "../constants/predictionConstants";

import { PredictionState } from "./analysisReducers";

type FutureAnalysisStates = {
  loading: boolean;
  success?: boolean;
  error?: string;
  predictions: PredictionState[];
};

export const futureAnalysisReducer = (
  state: FutureAnalysisStates = { loading: false, predictions: [] },
  action: FutureAnalysisDispatchTypes | LocationChangeAction
): FutureAnalysisStates => {
  switch (action.type) {
    case FUTURE_ANALYSIS_LOADING:
      return { ...state, loading: true };
    case FUTURE_ANALYSIS_SUCCESS:
      return { loading: false, success: true, predictions: action.payload };
    case FUTURE_ANALYSIS_FAILED:
      return {
        loading: false,
        success: false,
        error: action.payload,
        predictions: [],
      };
    case LOCATION_CHANGE || FUTURE_ANALYSIS_RESET:
      return { loading: false, predictions: [] };
    default:
      return state;
  }
};
