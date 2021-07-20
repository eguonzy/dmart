import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: { isAuthorized: false, token: "" },
  reducers: {
    loginUser: (state, { payload }) => {
      console.log(payload);
      return { ...payload, isAuthorized: true };
    },
    logoutUser: (state, { payload }) => {
      return { isAuthorized: false, token: "" };
    },
  },
});

export const { loginUser, logoutUser } = slice.actions;
export default slice.reducer;
