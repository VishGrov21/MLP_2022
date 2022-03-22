import { ConfigFormI, MetricsConfigManagerI, UpdateConfigMetricsI } from "model/settings.model";
import {
  ConfigLeadActionType,
  METRICS_CONFIG_MANAGER,
  METRIC_CONFIG_DATA,
  UPDATE_CONIG_METRICS,
} from "./configLead.type";

export const configMetricsFormActionCreator = (configuredData: ConfigFormI): ConfigLeadActionType => {
  return {
    type: METRIC_CONFIG_DATA,
    payload: configuredData,
  };
};

export const metricsConfigActionCreator = (configData: MetricsConfigManagerI[]): ConfigLeadActionType => {
  return {
    type: METRICS_CONFIG_MANAGER,
    payload: configData,
  };
};

export const UpdateConfigMetricsActionCreator = (updateMetricsData: UpdateConfigMetricsI): ConfigLeadActionType => {
  return {
    type: UPDATE_CONIG_METRICS,
    payload: updateMetricsData,
  };
};
