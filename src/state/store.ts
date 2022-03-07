import { createStore, applyMiddleware, AnyAction, Action, Store } from "redux";
import ReduxThunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import persistReducer from "state/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, {}, Action<string>>>();

export type AppThunk<ReturnType = Promise<unknown>> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

const store: Store = createStore(persistReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export const persistor = persistStore(store);

export default store;
