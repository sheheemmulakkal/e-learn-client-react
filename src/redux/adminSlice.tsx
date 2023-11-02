import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
    admin: boolean | null
}

const initialState: AdminState = {
    admin: null
}

const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {
        saveAdmin(state) {
            state.admin = true
        },

        adminLogout(state) {
            state.admin = null
        }
    }
})

export default adminSlice.reducer
export const adminActions = adminSlice.actions