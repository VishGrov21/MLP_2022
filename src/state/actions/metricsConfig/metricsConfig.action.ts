import { ConfigFormI } from "model/settings.model";
import { METRIC_CONFIG_DATA, MetricsConfigActionType } from "state/actions/metricsConfig/metricsConfig.type";

export const configMetricsActionCreator = (configuredData: ConfigFormI): MetricsConfigActionType => {
  return {
    type: METRIC_CONFIG_DATA,
    payload: configuredData,
  };
};
