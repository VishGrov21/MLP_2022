import { createStore, applyMiddleware, AnyAction } from "redux";
import ReduxThunk, { ThunkAction } from "redux-thunk";
import persistReducer from "state/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = Promise<unknown>> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

const store = createStore(persistReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export const persistor = persistStore(store);

export default store;
