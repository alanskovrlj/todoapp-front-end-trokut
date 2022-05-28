import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginCall } from "../backendCalls/userEndpointCalls";

//deklaracija konstanti koje će biti dio stanja
export const INPUT_NAME = "inputName";
export const INPUT_PASS = "inputPass";

//asikrono logiranje na server
export const performLogin = createAsyncThunk("user/performLogin", loginCall);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    inputs: { [INPUT_NAME]: "", [INPUT_PASS]: "" },
    loginStatus: "",
    userId: null,
    userName: "",
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.inputs = {
        ...state.inputs,
        [action.payload.type]: action.payload.val,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performLogin.pending, (state, action) => {
        state.loginStatus = "Logiranje u tijeku...";
      })
      .addCase(performLogin.fulfilled, (state, action) => {
        if (action.payload.results[0].succeed) {
          state.userId = action.payload.results[0].userId;
          state.userName = action.payload.results[0].userName;
          state.loginStatus = "Uspiješno ste se logirali";
        } else {
          state.loginStatus = "Unijeli ste pogrešnu lozinku ili username";
        }
      })
      .addCase(performLogin.rejected, (state, action) => {
        state.loginStatus = "Nešto nije u redu sa serverom. Pokušajte kasnije";
      });
  },
});

export const { handleInputChange } = userSlice.actions;

export default userSlice.reducer;
