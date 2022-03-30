import { ConfigFormI, ConfigLeadStateI, UpdateConfigMetricsI } from "model/settings.model";
import {
  CHILD_LABOUR_METRICS,
  ConfigLeadActionType,
  METRICS_CONFIG_MANAGER,
  METRIC_CONFIG_DATA,
  UPDATE_CONIG_METRICS,
} from "state/actions/settings/config-lead/configLead.type";

const configLeadInitState: ConfigLeadStateI = {
  configManager: [],
  configuredData: {} as ConfigFormI,
  updateConfigMetrics: {} as UpdateConfigMetricsI,
  childLabourMetrics: [],
};

export const configLeadReducer = (
  state: ConfigLeadStateI = configLeadInitState,
  action: ConfigLeadActionType
): ConfigLeadStateI => {
  switch (action.type) {
    case METRICS_CONFIG_MANAGER: {
      return {
        ...state,
        configManager: action.payload,
      };
    }
    case METRIC_CONFIG_DATA: {
      return { ...state, configuredData: action.payload };
    }
    case UPDATE_CONIG_METRICS: {
      return {
        ...state,
        updateConfigMetrics: action.payload,
      };
    }
    case CHILD_LABOUR_METRICS: {
      return {
        ...state,
        childLabourMetrics: action.payload,
      };
    }
    default:
      return state;
  }
};
