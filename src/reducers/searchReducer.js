import { FamilyRestroomTwoTone } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const searchReducer = createSlice({
  name: "searchReducer",
  initialState: {
    searchValue: "",
  },
  reducers: {
    UpdateSearchValue: (state, action) => {
      return {
        searchValue: action.payload,
      };
    },
  },
});

export const { UpdateSearchValue, SetLoading } = searchReducer.actions;
export default searchReducer.reducer;
