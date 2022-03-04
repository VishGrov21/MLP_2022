import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { SupplyMetrics } from "state/reducers/supplyMetrics.reducer";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "sustainitState",
  storage,
};

export const rootReducer = combineReducers({
  metrics: SupplyMetrics,
});

export default persistReducer(persistConfig, rootReducer);
