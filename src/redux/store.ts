import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

  const persistStudentReducer = persistReducer(persistConfig, studentReducer);

const store = configureStore({
    reducer: { student: persistStudentReducer }
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>; 