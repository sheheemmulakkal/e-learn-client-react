import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnrolledCourse } from "../dtos/EnrolledCourse";
import { Module } from "../dtos/module";

interface userState {
  course: EnrolledCourse | null;
  module: Module | null;
}

const initialState: userState = {
  course: null,
  module: null,
};

const selectedCourseSlice = createSlice({
  name: "selectedCourseSlice",
  initialState,
  reducers: {
    selectCourse(state, action: PayloadAction<EnrolledCourse | null>) {
      state.course = action.payload;
    },
    addModule(state, action: PayloadAction<string | null>) {
      state.course = {
        ...state.course,
        progression: [...(state.course?.progression || []), action.payload!],
      };
    },
    addNote(state, action: PayloadAction<string | null>) {
      state.course = {
        ...state.course,
        notes: [...(state.course?.notes || []), action.payload!],
      };
    },
    selectModule(state, action: PayloadAction<Module | null>) {
      state.module = action.payload;
    },
  },
});

export default selectedCourseSlice.reducer;
export const selectCourseActions = selectedCourseSlice.actions;
