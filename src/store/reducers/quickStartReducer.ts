import {
  SHOW_QUICKSTART,
  HIDE_QUICKSTART,
  QuickStartDispatchTypes,
} from "../constants/quickStartConstants";

type QuickStartState = {
  shown: boolean;
};

const quickStartReducer = (
  state: QuickStartState = { shown: false },
  action: QuickStartDispatchTypes
) => {
  switch (action.type) {
    case SHOW_QUICKSTART:
      return { shown: true };
    case HIDE_QUICKSTART:
      return { shown: false };
    default:
      return state;
  }
};

export default quickStartReducer;
