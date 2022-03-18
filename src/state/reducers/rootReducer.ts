import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { SupplyMetrics } from "state/reducers/supplyMetrics.reducer";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user.reducer";
import { metricsConfigReducer } from "./metricsConfig.reducer";

const persistConfig = {
  key: "sustainitState",
  storage,
};

export const rootReducer = combineReducers({
  metrics: SupplyMetrics,
  user: userReducer,
  metricsConfig: metricsConfigReducer,
});

export default persistReducer(persistConfig, rootReducer);
