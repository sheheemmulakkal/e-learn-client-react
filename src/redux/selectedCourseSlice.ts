import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnrolledCourse } from "../dtos/EnrolledCourse";

interface userState {
  course: EnrolledCourse | null;
}

const initialState: userState = {
  course: null,
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
      console.log("ehloo");

      state.course = {
        ...state.course,
        notes: [...(state.course?.notes || []), action.payload!],
      };
    },
  },
});

export default selectedCourseSlice.reducer;
export const selectCourseActions = selectedCourseSlice.actions;
