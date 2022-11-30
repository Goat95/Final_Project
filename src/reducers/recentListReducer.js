import { createSlice } from "@reduxjs/toolkit";

export const recentListReducer = createSlice({
  name: "recentListReducer",
  initialState: [],
  reducers: {
    addrecentList: (state, action) => {
      return [
        action.payload,
        ...state.filter((item) => item.id !== action.payload.id).slice(0, 3),
      ];
    },
  },
});

export const { addrecentList } = recentListReducer.actions;
export default recentListReducer.reducer;
