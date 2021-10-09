import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import {
  ChatbotPredictionDispatchTypes,
  CHATBOT_PREDICTION_FAILED,
  CHATBOT_PREDICTION_LOADING,
  CHATBOT_PREDICTION_RESET,
  CHATBOT_PREDICTION_SUCCESS,
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

type ChatbotAnalysisState = {
  loading: boolean;
  error?: string;
  result: string;
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
    case LOCATION_CHANGE:
    case FUTURE_ANALYSIS_RESET:
      return { loading: false, predictions: [] };
    default:
      return state;
  }
};

export const chatbotPredictionReducer = (
  state: ChatbotAnalysisState = { loading: false, result: "" },
  action: ChatbotPredictionDispatchTypes
): ChatbotAnalysisState => {
  switch (action.type) {
    case CHATBOT_PREDICTION_LOADING:
      return { ...state, loading: true };
    case CHATBOT_PREDICTION_SUCCESS:
      return { loading: false, result: action.payload };
    case CHATBOT_PREDICTION_FAILED:
      return {
        loading: false,
        error: action.payload,
        result: "",
      };
    case CHATBOT_PREDICTION_RESET:
      return { loading: false, result: "" };
    default:
      return state;
  }
};
