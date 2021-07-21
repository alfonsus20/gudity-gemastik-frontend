import { PredictionState } from "../reducers/analysisReducers";
import { LocationChange } from "./routerConstants";

export const PAST_ANALYSIS_LOADING = "PAST_ANALYSIS_LOADING";
export const PAST_ANALYSIS_SUCCESS = "PAST_ANALYSIS_SUCCESS";
export const PAST_ANALYSIS_FAILED = "PAST_ANALYSIS_FAILED";
export const PAST_ANALYSIS_RESET = "PAST_ANALYSIS_RESET";

interface PastAnalysisLoading {
  type: typeof PAST_ANALYSIS_LOADING;
}

interface PastAnalysisSuccess {
  type: typeof PAST_ANALYSIS_SUCCESS;
  payload: PredictionState[];
}

interface PastAnalysisFailed {
  type: typeof PAST_ANALYSIS_FAILED;
  payload: string;
}

interface PastAnalysisReset {
  type: typeof PAST_ANALYSIS_RESET;
  payload: [];
}

export type PastAnalysisDispatchTypes =
  | PastAnalysisLoading
  | PastAnalysisSuccess
  | PastAnalysisFailed
  | PastAnalysisReset
  | LocationChange;
