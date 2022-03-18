import { ConfigFormI } from "model/settings.model";

export const METRIC_CONFIG_DATA = "metric_config_data";

interface MetricsConfigType {
  type: typeof METRIC_CONFIG_DATA;
  payload: ConfigFormI;
}

export type MetricsConfigActionType = MetricsConfigType;
