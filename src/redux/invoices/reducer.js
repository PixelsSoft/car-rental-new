import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getService,
  postService,
  deleteService,
  putService,
} from "../../api/apiService";
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

const createInvoice = createAsyncThunk(
  invoiceActionTypes.CREATE_INVOICE,
  async (data) => {
    const result = await postService("/invoices/create", data);
    return result;
  }
);

const deleteInvoice = createAsyncThunk(
  invoiceActionTypes.DELETE_INVOICE,
  async (id) => {
    const result = await deleteService("/invoices/delete/" + id);
    return result;
  }
);

const getInvoiceDetails = createAsyncThunk(
  invoiceActionTypes.GET_INVOICE_DETAILS,
  async (id) => {
    const result = await getService("/invoices/details/" + id);
    return result;
  }
);

const getRecurringInvoices = createAsyncThunk(
  invoiceActionTypes.GET_RECURRING_INVOICES,
  async () => {
    const result = await getService("/recurring-invoices");
    console.log(result);
    return result;
  }
);

const editInvoice = createAsyncThunk(
  invoiceActionTypes.EDIT_INVOICE,
  async (data) => {
    const result = await putService("/invoices/edit/" + data.id, data);
    return result;
  }
);

const endRecurringInvoice = createAsyncThunk(
  invoiceActionTypes.END_RECURRING_INVOICE,
  async (id) => {
    const result = await putService("/recurring-invoice/end/" + id);
    return result;
  }
);

const initialState = {
  loading: false,
  invoices: [],
  recurringInvoices: [],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.invoices = [];
      state.invoiceCreated = false;
      state.invoiceDeleted = false;
      state.invoiceEdited = false;
      state.error = null;
      state.invoice = null;
      state.message = null;
    },
  },
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

    builder
      .addCase(createInvoice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.invoiceCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createInvoice.rejected, (state, action) => {
        state.loading = false;
        state.invoiceCreated = false;
        state.error = action.error;
      });

    builder
      .addCase(deleteInvoice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.invoiceDeleted = true;
        state.message = action.payload.message;
      })
      .addCase(deleteInvoice.rejected, (state, action) => {
        state.loading = false;
        state.invoiceDeleted = false;
        state.error = action.error;
      });

    builder
      .addCase(getInvoiceDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getInvoiceDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.invoice = action.payload.invoice;
      })
      .addCase(getInvoiceDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    builder
      .addCase(getRecurringInvoices.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getRecurringInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.recurringInvoices = action.payload.invoices;
      })
      .addCase(getRecurringInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    builder
      .addCase(editInvoice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.invoiceEdited = true;
        state.message = action.payload.message;
      })
      .addCase(editInvoice.rejected, (state, action) => {
        state.loading = false;
        state.invoiceEdited = false;
        state.error = action.error;
      });

    builder
      .addCase(endRecurringInvoice.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(endRecurringInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(endRecurringInvoice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export {
  getAllInvoices,
  createInvoice,
  getInvoiceDetails,
  deleteInvoice,
  getRecurringInvoices,
  editInvoice,
  endRecurringInvoice,
};

export const { reset } = invoiceSlice.actions;
export default invoiceSlice.reducer;
