import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentAccountsActionTypes from "./types";
import { getService } from "../../api/apiService";

const getAllPaymentAccounts = createAsyncThunk(
  paymentAccountsActionTypes.GET_ALL_PAYMENT_ACCOUNTS,
  async () => {
    const result = await getService("/payment-accounts");

    return result;
  }
);

const initialState = {
  loading: false,
  paymentAccounts: [],
};

const paymentAccountsSlice = createSlice({
  name: "paymentAccounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPaymentAccounts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllPaymentAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentAccounts = action.payload.paymentAccounts;
      })
      .addCase(getAllPaymentAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export { getAllPaymentAccounts };
export default paymentAccountsSlice.reducer;
