import { SupplyMetricsTabsI } from "model/supplyMetrics.model";
import {
  FOOTPRINT_FILTER,
  METRIC_TILES_DATA,
  SupplyMetricsActionType,
} from "state/actions/supplyMetrics/supplyMetrics.type";

interface MetricsStateI {
  tilesData: SupplyMetricsTabsI[];
  filterData: object;
}

const initialState: MetricsStateI = {
  tilesData: [],
  filterData: {},
};

export const SupplyMetrics = (state: MetricsStateI = initialState, action: SupplyMetricsActionType): MetricsStateI => {
  switch (action.type) {
    case METRIC_TILES_DATA:
      return { ...state, tilesData: action.payload };
    case FOOTPRINT_FILTER:
      return { ...state, filterData: action.payload };

    default:
      return state;
  }
};
