import { createSlice } from "@reduxjs/toolkit";

const rememberIdReducer = createSlice({
  name: "rememberId",
  initialState: {
    id: ""
  },
  reducers: {
    AddId: (state, action) => {
      return {
        id: action.payload
      }
    },
    DeletId: (state, action) => {
      return {
        id: ""
      }
    }
  }
});

export const { AddId, DeletId } = rememberIdReducer.actions;
export default rememberIdReducer.reducer;