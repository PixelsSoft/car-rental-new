import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentRecordActionTypes from "./types";
import { postService } from "../../api/apiService";

const createPaymentRecord = createAsyncThunk(
  paymentRecordActionTypes.CREATE_RECORD,
  async (data) => {
    const result = await postService("/payment-record/create", data);
    console.log(result);
    return result;
  }
);

const initialState = {
  loading: false,
  paymentRecordCreated: false,
};

const paymentRecordSlice = createSlice({
  name: "paymentRecord",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.paymentRecordCreated = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentRecord.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createPaymentRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentRecordCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createPaymentRecord.rejected, (state, action) => {
        state.loading = false;
        state.paymentRecordCreated = false;
        state.error = action.error;
      });
  },
});

export { createPaymentRecord };

export const { reset } = paymentRecordSlice.actions;
export default paymentRecordSlice.reducer;
