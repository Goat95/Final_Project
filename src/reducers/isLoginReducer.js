import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const isLoginReducer = createSlice({
  name: "isLogin",
  initialState: {
    email: "",
    displayName: "",
    profileImg: "",
    accessToken: "",
    profileImgBase64: "",
    isLogin: null,
  },

  reducers: {
    Auth: (state, action) => {
      const info = action.payload;
      return {
        email: info.user.email,
        displayName: info.user.displayName,
        profileImg: info.user.profileImg,
        accessToken: info.accessToken,
        isLogin: true,
      };
    },
    EditProfile: (state, action) => {
      const newDisplayName = action.payload.displayName
        ? action.payload.displayName
        : state.displayName;

      const newProfileIamgeBase64 = action.payload.profileImgBase64
        ? action.payload.profileImgBase64
        : state.profileImgBase64;

      const newProfileImage = action.payload.profileImg
        ? action.payload.profileImg
        : state.profileImg;

      return {
        ...state,
        displayName: newDisplayName,
        profileImgBase64: newProfileIamgeBase64,
        profileImg: newProfileImage,
      };
    },

    Logout: (state, action) => {
      return {
        email: "",
        displayName: "",
        profileImg: "",
        accessToken: "",
        isLogin: false,
      };
    },
  },
});

export const { Auth, Logout, EditProfile } = isLoginReducer.actions;
export default isLoginReducer.reducer;
