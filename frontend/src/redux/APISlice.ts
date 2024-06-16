import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIType, commentType } from "../types";

export interface APIData {
  data: APIType[];
}

const initialState: APIData = {
  data: [],
};

export const APISlice = createSlice({
  name: "API",
  initialState,
  reducers: {
    setAPI: (state, action: PayloadAction<APIType[]>) => {
      state.data = action.payload;
    },
    updateIsCommentSection: (state, action: PayloadAction<string>) => {
      state.data = state.data.map((api) =>
        api._id === action.payload
          ? { ...api, isCommentSection: !api.isCommentSection }
          : api,
      );
    },

    postComment: (
      state,
      action: PayloadAction<{ id: string; comment: commentType }>,
    ) => {
      state.data = state.data.map((api) =>
        api._id === action.payload.id
          ? { ...api, comments: [action.payload.comment, ...api.comments] }
          : api,
      );
    },
  },
});

export const { setAPI, updateIsCommentSection, postComment } = APISlice.actions;
export default APISlice.reducer;
