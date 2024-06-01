import { createSlice } from "@reduxjs/toolkit";

export interface UserId {
  isLogin: boolean;
  id: number;
}

const initialState: UserId = {
  isLogin: false,
  id: 0,
};

export const UserAuthSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = UserAuthSlice.actions;

export default UserAuthSlice.reducer;
