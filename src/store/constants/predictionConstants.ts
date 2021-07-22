import { PredictionState } from "../reducers/analysisReducers";

export const FUTURE_ANALYSIS_LOADING = "FUTURE_ANALYSIS_LOADING";
export const FUTURE_ANALYSIS_SUCCESS = "FUTURE_ANALYSIS_SUCCESS";
export const FUTURE_ANALYSIS_FAILED = "FUTURE_ANALYSIS_FAILED";
export const FUTURE_ANALYSIS_RESET = "FUTURE_ANALYSIS_RESET";

interface FutureAnalysisLoading {
  type: typeof FUTURE_ANALYSIS_LOADING;
}

interface FutureAnalysisSuccess {
  type: typeof FUTURE_ANALYSIS_SUCCESS;
  payload: PredictionState[];
}

interface FutureAnalysisFailed {
  type: typeof FUTURE_ANALYSIS_FAILED;
  payload: string;
}

interface FutureAnalysisReset {
  type: typeof FUTURE_ANALYSIS_RESET;
  payload: [];
}

export type FutureAnalysisDispatchTypes =
  | FutureAnalysisLoading
  | FutureAnalysisSuccess
  | FutureAnalysisFailed
  | FutureAnalysisReset;
