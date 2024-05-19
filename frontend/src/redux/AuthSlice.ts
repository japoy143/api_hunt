import { createSlice } from "@reduxjs/toolkit";

export interface UserId {
  id: number;
}

const initialState: UserId = {
  id: 0,
};

export const UserAuthSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    login: (state) => {
      state.id = 1;
    },
    logout: (state) => {
      state.id = 0;
    },
  },
});

export const { login, logout } = UserAuthSlice.actions;

export default UserAuthSlice.reducer;
