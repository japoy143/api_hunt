import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserId {
  email: string;
  isLogin: boolean;
  id: string;
  avatar: number;
  accessToken: string;
}

const initialState: UserId = {
  email: "",
  isLogin: false,
  id: "",
  avatar: 0,
  accessToken: "",
};

export const UserAuthSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        id: string;
        avatar: number;
        accessToken: string;
      }>,
    ) => {
      state.email = action.payload.email;
      state.isLogin = true;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    changeAvatar: (state, action: PayloadAction<number>) => {
      state.avatar = action.payload;
    },
    updateAccessTokenOnly: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { login, logout, changeAvatar, updateAccessTokenOnly } =
  UserAuthSlice.actions;

export default UserAuthSlice.reducer;
