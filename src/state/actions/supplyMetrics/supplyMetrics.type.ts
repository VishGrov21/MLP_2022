import { SupplyMetricsTabsI, FootPrintFilterI } from "model/supplyMetrics.model";

export const METRIC_TILES_DATA = "metric_tiles_data";
export const FOOTPRINT_FILTER = "footprint_filter";

interface MetricsActionType {
  type: typeof METRIC_TILES_DATA;
  payload: SupplyMetricsTabsI[];
}

interface FootPrintActionType {
  type: typeof FOOTPRINT_FILTER;
  payload: FootPrintFilterI;
}

export type SupplyMetricsActionType = MetricsActionType | FootPrintActionType;
