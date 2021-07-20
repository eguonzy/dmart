import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "account",
  initialState: { current:typeof localStorage !=='undefined'&& localStorage.getItem("account") || "Account" },
  reducers: {
    account: (state, { payload }) => {
    typeof localStorage !== "undefined"&&  localStorage.setItem("account", payload.option);
      state.current = payload.option;
    },
  },
});

export const { account } = slice.actions;
export default slice.reducer;
