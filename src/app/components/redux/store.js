import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import charactersSlice from "../character/charactersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  charactersData: charactersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: rootReducer,
  //   reducer: persistedReducer,
});
