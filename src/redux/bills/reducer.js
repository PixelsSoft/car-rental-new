import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import billActionTypes from "./types";
import {
  deleteService,
  getService,
  postService,
  putService,
} from "../../api/apiService";

const createBill = createAsyncThunk(
  billActionTypes.CREATE_BILL,
  async (data) => {
    const result = await postService("/bills/create", data);
    return result;
  }
);

const editBill = createAsyncThunk(billActionTypes.UPDATE_BILL, async (data) => {
  const result = await putService("/bills/edit/" + data.id, data);
  return result;
});

const deleteBill = createAsyncThunk(billActionTypes.DELETE_BILL, async (id) => {
  const result = await deleteService("/bills/delete/" + id);
  return result;
});

const getBills = createAsyncThunk(billActionTypes.GET_BILLS, async () => {
  const result = await getService("/bills");
  console.log(result);
  return result;
});

const getBillById = createAsyncThunk(billActionTypes.GET_BILL, async (id) => {
  const result = await getService("/bills/details/" + id);
  return result;
});

const createBillRecord = createAsyncThunk(
  billActionTypes.CREATE_RECORD,
  async (data) => {
    const result = await postService("/bill-record/create", data);
    return result;
  }
);

const initialState = {
  loading: false,
  bills: [],
  billCreated: false,
  billUpdated: false,
  billDeleted: false,
  message: null,
  error: null,
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.billCreated = false;
      state.billDeleted = false;
      state.bills = [];
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    //create bill
    builder
      .addCase(createBill.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createBill.fulfilled, (state, action) => {
        state.loading = false;
        state.billCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createBill.rejected, (state, action) => {
        state.loading = false;
        state.billCreated = false;
        state.error = action.error;
      });

    // get bills
    builder
      .addCase(getBills.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBills.fulfilled, (state, action) => {
        state.loading = false;
        state.bills = action.payload.Bills;
      })
      .addCase(getBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    // delete bill
    builder
      .addCase(deleteBill.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBill.fulfilled, (state, action) => {
        state.loading = false;
        state.billDeleted = true;
        state.message = action.payload.message;
      })
      .addCase(deleteBill.rejected, (state, action) => {
        state.loading = false;
        state.billDeleted = false;
        state.error = action.error;
      });

    // edit bill
    builder
      .addCase(editBill.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editBill.fulfilled, (state, action) => {
        state.loading = false;
        state.billUpdated = true;
        state.message = action.payload.message;
      })
      .addCase(editBill.rejected, (state, action) => {
        state.loading = false;
        state.billUpdated = false;
        state.error = action.error;
      });

    builder
      .addCase(createBillRecord.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createBillRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.billRecordCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createBillRecord.rejected, (state, action) => {
        state.loading = false;
        state.billRecordCreated = false;
        state.error = action.error;
      });

    builder
      .addCase(getBillById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBillById.fulfilled, (state, action) => {
        state.loading = false;
        state.bill = action.payload.bill;
      })
      .addCase(getBillById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export {
  deleteBill,
  getBills,
  editBill,
  createBill,
  createBillRecord,
  getBillById,
};

export const { reset } = billsSlice.actions;
export default billsSlice.reducer;
