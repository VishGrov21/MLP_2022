import { SupplyMetricsTabsI } from "model/supplyMetrics.model";

export const METRIC_TILES_DATA = "metric_tiles_data";

interface MetricsActionType {
  type: typeof METRIC_TILES_DATA;
  payload: SupplyMetricsTabsI[];
}

export type SupplyMetricsActionType = MetricsActionType;
