import { TabsI } from "model/common.model";

export const METRIC_TILES_DATA = "metric_tiles_data";

interface MetricsActionType {
  type: typeof METRIC_TILES_DATA;
  payload: TabsI[];
}

export type SupplyMetricsActionType = MetricsActionType;
