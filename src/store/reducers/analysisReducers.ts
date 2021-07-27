import {
  PastAnalysisDispatchTypes,
  PAST_ANALYSIS_FAILED,
  PAST_ANALYSIS_LOADING,
  PAST_ANALYSIS_RESET,
  PAST_ANALYSIS_SUCCESS,
} from "../constants/analysisConstants";
import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";

export type PredictionState = {
  time: string;
  value: number;
};

type PastAnalysisStates = {
  loading?: boolean;
  success?: boolean;
  error?: string;
  predictions: PredictionState[];
};

export const pastAnalysisReducer = (
  state: PastAnalysisStates = { loading: false, predictions: [] },
  action: PastAnalysisDispatchTypes | LocationChangeAction
): PastAnalysisStates => {
  switch (action.type) {
    case PAST_ANALYSIS_LOADING:
      return { ...state, loading: true };
    case PAST_ANALYSIS_SUCCESS:
      return { loading: false, success: true, predictions: action.payload };
    case PAST_ANALYSIS_FAILED:
      return {
        loading: false,
        success: false,
        error: action.payload,
        predictions: [],
      };
    case LOCATION_CHANGE || PAST_ANALYSIS_RESET:
      return { loading: false, predictions: [] };
    default:
      return state;
  }
};
