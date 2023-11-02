import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import instructorReducer from './InstructorSlice'
import adminReducer from './adminSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

  const persistStudentReducer = persistReducer(persistConfig, studentReducer);
  const persistInstructortReducer = persistReducer(persistConfig, instructorReducer);
  const persistAdminReducer = persistReducer(persistConfig, adminReducer);

const store = configureStore({
    reducer: { student: persistStudentReducer,
        instructor: persistInstructortReducer,
        admin: persistAdminReducer
    }
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>; 