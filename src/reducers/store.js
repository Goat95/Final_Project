// redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import isLoginReducer from "./isLoginReducer";
import rememberIdReducer from "./rememberIdReducer";
import accountReducer from "./accountReducer";
import searchReducer from "../reducers/searchReducer";
import steamedReducer from "./steamedReducer";
import recentListReducer from "./recentListReducer";
import clickReducer from "./clickReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  isLoginReducer,
  rememberIdReducer,
  accountReducer,
  searchReducer,
  steamedReducer,
  recentListReducer,
  clickReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
