import { createSlice } from "@reduxjs/toolkit"

export const steamedReducer = createSlice({
  name: "steamedReducer",
  initialState: [],
  reducers: {
    addSteamed: (state, action) => {
      return [
        action.payload,
        ...state.filter(item => item.id !== action.payload.id),
      ]
    },
    deleteSteamed: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  }
})

export const { addSteamed, deleteSteamed } = steamedReducer.actions;
export default steamedReducer.reducer;