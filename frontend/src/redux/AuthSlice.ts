import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserId {
  email: string;
  isLogin: boolean;
  id: string;
}

const initialState: UserId = {
  email: "",
  isLogin: false,
  id: "",
};

export const UserAuthSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; id: string }>) => {
      state.email = action.payload.email;
      state.isLogin = true;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = UserAuthSlice.actions;

export default UserAuthSlice.reducer;
