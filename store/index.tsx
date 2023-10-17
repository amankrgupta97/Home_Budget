import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import budgetReducer, { budgetEntry } from "./slices/budgetSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  budget: budgetReducer,
});

const rootReducer = (
  state: CombinedState<{
    budget: { budgetEntry: budgetEntry; savedItemList: budgetEntry[] };
  }>,
  action: AnyAction
) => {
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
