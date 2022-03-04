import { SupplyMetricsTabsI } from "model/supplyMetrics.model";
import { AnyAction } from "redux";
import { METRIC_TILES_DATA, SupplyMetricsActionType } from "state/actions/supplyMetrics/supplyMetrics.type";

interface MetricsStateI {
  tilesData: SupplyMetricsTabsI[];
}

const initialState: MetricsStateI = {
  tilesData: [],
};

export const SupplyMetrics = (state = initialState, action: AnyAction): MetricsStateI => {
  switch (action.type) {
    case METRIC_TILES_DATA:
      return { ...state, tilesData: action.payload };

    default:
      return state;
  }
};
