import paymentMethodsActionTypes from "./types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getService } from "../../api/apiService";

const getAllPaymentMethods = createAsyncThunk(
  paymentMethodsActionTypes.GET_ALL_PAYMENT_METHODS,
  async () => {
    const result = await getService("/payment-methods");
    console.log(result);
    return result;
  }
);

const initialState = {
  loading: false,
  paymentMethods: [],
};

const paymentMethodsSlice = createSlice({
  name: "paymentMethods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPaymentMethods.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllPaymentMethods.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentMethods = action.payload.paymentMethods;
      })
      .addCase(getAllPaymentMethods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export { getAllPaymentMethods };
export default paymentMethodsSlice.reducer;
