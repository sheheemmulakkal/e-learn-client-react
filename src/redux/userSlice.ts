import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../dtos/User";

interface Notification {
  id?: string;
  message?: string;
  image?: string;
  name?: string;
}
interface userState {
  userEmail: string | null;
  user: User | null;
  notification: Notification[];
}

const initialState: userState = {
  userEmail: null,
  user: null,
  notification: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string | null>) {
      state.userEmail = action.payload;
    },

    saveUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },

    addCourse(state, action: PayloadAction<string | null>) {
      state.user?.courses?.push(action.payload!);
    },

    addNotification(state, action: PayloadAction<Notification>) {
      // Check if the notification with the same id already exists
      console.log(action.payload, "ap");

      const existingNotification = state.notification.find(
        (n) => n.id === action.payload.id
      );

      if (!existingNotification) {
        // If not, add the new notification
        state.notification.push(action.payload);
      } else {
        // If exists, remove the existing one and add the updated notification
        state.notification = state.notification.filter(
          (n) => n.id !== action.payload.id
        );
        state.notification.push(action.payload);
      }
    },

    removeNotification(state, action: PayloadAction<string>) {
      // Remove the notification with the specified id
      state.notification = state.notification.filter(
        (n) => n.id !== action.payload
      );
    },

    userLogout(state) {
      state.user = null;
      state.userEmail = null;
      state.notification = [];
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
