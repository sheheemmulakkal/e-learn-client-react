import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudent } from "../dtos/Student";



interface studentState {

    studentEmail: string | null
    student: IStudent | null
}

const initialState: studentState = {

    studentEmail: null,
    student: null
}

const studentSlice = createSlice({
    name: "studentSlice",
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string | null>) {
            state.studentEmail = action.payload
        },

        saveStudent(state, action: PayloadAction<IStudent | null>) {
            state.student = action.payload
        },

        studentLogout(state) {
            state.student = null,
            state.studentEmail = null
        }
    }
})

export default studentSlice.reducer
export const studentActions = studentSlice.actions