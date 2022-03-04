import { METRIC_TILES_DATA } from "state/actions/supplyMetrics/supplyMetrics.type";

const initialState = {
  tilesData: [],
};

interface actionTypeI {
  type: string;
  payload?: any;
}

export const SupplyMetrics = (state = initialState, action: actionTypeI) => {
  const { type, payload } = action;

  switch (type) {
    case METRIC_TILES_DATA:
      return { ...state, tilesData: payload };

    default:
      return state;
  }
};
