import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../dtos/Course";

interface userState {
  course: Course | null;
}

const initialState: userState = {
  course: null,
};

const selectedCourseSlice = createSlice({
  name: "selectedCourseSlice",
  initialState,
  reducers: {
    selectCourse(state, action: PayloadAction<Course | null>) {
      state.course = action.payload;
    },
  },
});

export default selectedCourseSlice.reducer;
export const selectCourseActions = selectedCourseSlice.actions;
