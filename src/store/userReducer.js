import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  user: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    Loading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    SetUser: (state, action) => {
      const { user, username } = action.payload;

      return {
        ...state,
        isLoading: false,
        user: user,
        username: username,
      };
    },

    Logout: (state) => {
      return { ...state, isLoading: false, user: "", username: "" };
    },
  },
});

export const { Loading, SetUser, Logout } = userSlice.actions;
export default userSlice.reducer;
