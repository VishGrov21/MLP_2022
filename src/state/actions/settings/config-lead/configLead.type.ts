import { MetricsConfigManagerI, ConfigFormI, UpdateConfigMetricsI } from "model/settings.model";

export const METRICS_CONFIG_MANAGER = "metrics_config_manager";
export const METRIC_CONFIG_DATA = "metric_config_data";
export const UPDATE_CONIG_METRICS = "update_config_metrics";

interface MetricsConfigType {
  type: typeof METRIC_CONFIG_DATA;
  payload: ConfigFormI;
}

interface MetricsConfigActionType {
  type: typeof METRICS_CONFIG_MANAGER;
  payload: MetricsConfigManagerI[];
}

interface UpdateConfigMetricsActionType {
  type: typeof UPDATE_CONIG_METRICS;
  payload: UpdateConfigMetricsI;
}

export type ConfigLeadActionType = MetricsConfigActionType | MetricsConfigType | UpdateConfigMetricsActionType;
