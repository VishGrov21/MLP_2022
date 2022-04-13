import { SupplyMetricsTabsI } from "model/supplyMetrics.model";
import { AnyAction } from "redux";
import {
  FOOTPRINT_FILTER,
  METRIC_TILES_DATA,
  SupplyMetricsActionType,
} from "state/actions/supplyMetrics/supplyMetrics.type";

interface MetricsStateI {
  tilesData: SupplyMetricsTabsI[];
  filteredData: object;
}

const initialState: MetricsStateI = {
  tilesData: [],
  filteredData: {},
};

export const SupplyMetrics = (state: MetricsStateI = initialState, action: AnyAction): MetricsStateI => {
  switch (action.type) {
    case METRIC_TILES_DATA:
      return { ...state, tilesData: action.payload };
    case FOOTPRINT_FILTER:
      return { ...state, filteredData: action.payload };

    default:
      return state;
  }
};
