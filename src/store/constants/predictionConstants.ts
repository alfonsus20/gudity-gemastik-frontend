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

export const CHATBOT_PREDICTION_LOADING = "CHATBOT_PREDICTION_LOADING";
export const CHATBOT_PREDICTION_SUCCESS = "CHATBOT_PREDICTION_SUCCESS";
export const CHATBOT_PREDICTION_FAILED = "CHATBOT_PREDICTION_FAILED";
export const CHATBOT_PREDICTION_RESET = "CHATBOT_PREDICTION_RESET";

interface ChatbotPredictionLoading {
  type: typeof CHATBOT_PREDICTION_LOADING;
}

interface ChatbotPredictionSuccess {
  type: typeof CHATBOT_PREDICTION_SUCCESS;
  payload: string;
}

interface ChatbotPredictionFailed {
  type: typeof CHATBOT_PREDICTION_FAILED;
  payload: string;
}

interface ChatbotPredictionReset {
  type: typeof CHATBOT_PREDICTION_RESET;
}

export type ChatbotPredictionDispatchTypes =
  | ChatbotPredictionLoading
  | ChatbotPredictionSuccess
  | ChatbotPredictionFailed
  | ChatbotPredictionReset;
