import { createSlice } from "@reduxjs/toolkit";

const accountReducer = createSlice({
  name: "account",
  initialState: {
    bankCode: "",
    accountNumber: "",
    phoneNumber: "",
    id: "",
    signature: null,
  },
  reducers: {
    AddAccount: (state, action) => {
      const info = action.payload;
      // return [...{ ...action.payload, signature: true }];
      return {
        bankCode: info.bankCode,
        accountNumber: info.accountNumber,
        phoneNumber: info.phoneNumber,
        id: info.id,
        signature: true,
      };
    },

    DeleteAccount: (state, action) => {
      return {
        bankCode: "",
        accountNumber: "",
        phoneNumber: "",
        id: "",
        signature: false,
      };
    },
  },
});

export const { AddAccount, DeleteAccount } = accountReducer.actions;
export default accountReducer.reducer;
