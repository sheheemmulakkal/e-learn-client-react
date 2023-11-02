import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor } from "../dtos/Instructor";



interface instructorState {

    instructorEmail: string | null
    instructor: Instructor | null
}

const initialState: instructorState = {

    instructorEmail: null,
    instructor: null
}

const instructorSlice = createSlice({
    name: "instructorSlice",
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string | null>) {
            state.instructorEmail = action.payload
        },

        saveInstructor(state, action: PayloadAction<Instructor | null>) {
            state.instructor = action.payload
        },

        instructorLogout(state) {
            state.instructor = null,
            state.instructorEmail = null
        }
    }
})

export default instructorSlice.reducer
export const instructorActions = instructorSlice.actions