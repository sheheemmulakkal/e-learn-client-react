import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import selectedCoruseReducer from "./selectedCourseSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistUserReducer = persistReducer(persistConfig, userReducer);
const persistSelectedCourseReducer = persistReducer(
  persistConfig,
  selectedCoruseReducer
);

const store = configureStore({
  reducer: {
    user: persistUserReducer,
    selecedCourse: persistSelectedCourseReducer,
  },
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
