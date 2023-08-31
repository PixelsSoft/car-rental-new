import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authActionTypes from "./types";
import { postService } from "../../api/apiService";

const login = createAsyncThunk( authActionTypes.LOGIN, async ( credentials ) => {
  const result = await postService( "/users/login", credentials );
  return result;
} );

const initialState = {
  loading: false,
  user: null,
  token: null,
};

const authSlice = createSlice( {
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( login.pending, ( state, action ) => {
        state.loading = true;
      } )
      .addCase( login.fulfilled, ( state, action ) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      } )
      .addCase( login.rejected, ( state, action ) => {
        state.loading = false;
        state.error = action.error.message;
      } );
  },
} );

export { login };
export default authSlice.reducer;
