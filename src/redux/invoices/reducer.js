import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getService, postService, deleteService } from "../../api/apiService";
import invoiceActionTypes from "./types";

// Thunks

/* 
Get all invoices 
*/
const getAllInvoices = createAsyncThunk(
  invoiceActionTypes.GET_ALL_INVOICES,
  async () => {
    const result = await getService("/invoices");
    return result;
  }
);

const initialState = {
  loading: false,
  invoices: [],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all invoices
    builder
      .addCase(getAllInvoices.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload.invoices;
      })
      .addCase(getAllInvoices.rejected, (state, action) => {
        state.loading = false;
        state.invoices = [];
        state.error = action.error;
      });
  },
});

export { getAllInvoices };
export default invoiceSlice.reducer;
