import { METRIC_CONFIG_DATA, MetricsConfigActionType } from "state/actions/metricsConfig/metricsConfig.type";

const initialState = {
  configuredData: [],
};

export const metricsConfigReducer = (state = initialState, action: MetricsConfigActionType) => {
  switch (action.type) {
    case METRIC_CONFIG_DATA:
      return { ...state, configuredData: action.payload };

    default:
      return state;
  }
};
