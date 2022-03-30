import { ChildLabourMetricsI, ConfigFormI, MetricsConfigManagerI, UpdateConfigMetricsI } from "model/settings.model";
import {
  CHILD_LABOUR_METRICS,
  ConfigLeadActionType,
  METRICS_CONFIG_MANAGER,
  METRIC_CONFIG_DATA,
  UPDATE_CHILD_LABOUR_METRICS,
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

export const updateConfigMetricsActionCreator = (updateMetricsData: UpdateConfigMetricsI): ConfigLeadActionType => {
  return {
    type: UPDATE_CONIG_METRICS,
    payload: updateMetricsData,
  };
};

export const childLabourMetricsActionCreator = (metrics: ChildLabourMetricsI[]): ConfigLeadActionType => {
  return {
    type: CHILD_LABOUR_METRICS,
    payload: metrics,
  };
};
