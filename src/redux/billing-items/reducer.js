import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import billingItemsActionTypes from "./types";
import {
  deleteService,
  getService,
  postService,
  putService,
} from "../../api/apiService";

const createBillingItem = createAsyncThunk(
  billingItemsActionTypes.CREATE_BILLING_ITEM,
  async (data) => {
    const result = await postService("/billing-items/create", data);
    return result;
  }
);

const getBillingItems = createAsyncThunk(
  billingItemsActionTypes.GET_BILLING_ITEMS,
  async () => {
    const result = await getService("/billing-items");
    return result;
  }
);

const getBillingItemDetail = createAsyncThunk(
  billingItemsActionTypes.GET_ITEM_DETAILS,
  async (id) => {
    const result = await getService("/billing-items/details/" + id);
    return result;
  }
);

const updateBillingItem = createAsyncThunk(
  billingItemsActionTypes.UPDATE_BILLING_ITEM,
  async (data) => {
    const result = await putService("/billing-items/edit/" + data.id, data);
    return result;
  }
);

const deleteBillingItem = createAsyncThunk(
  billingItemsActionTypes.DELETE_BILLING_ITEM,
  async (id) => {
    const result = await deleteService("/billing-items/delete/" + id);
    return result;
  }
);

const initialState = {
  loading: false,
  billingItems: [],
  billingItemCreated: false,
  billingItemDeleted: false,
  billingItemUpdated: false,
  error: null,
  message: null,
};

const billingItemSlice = createSlice({
  name: "billingItems",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.billingItems = [];
      state.billingItemCreated = false;
      state.billingItemDeleted = false;
      state.billingItemUpdated = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBillingItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createBillingItem.fulfilled, (state, action) => {
        state.loading = false;
        state.billingItemCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createBillingItem.rejected, (state, action) => {
        state.loading = false;
        state.billingItemCreated = false;
        state.error = action.error;
      });

    builder
      .addCase(getBillingItems.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBillingItems.fulfilled, (state, action) => {
        state.loading = false;
        state.billingItems = action.payload.items;
      })
      .addCase(getBillingItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    builder
      .addCase(deleteBillingItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBillingItem.fulfilled, (state, action) => {
        state.loading = false;
        state.billingItemDeleted = true;
      })
      .addCase(deleteBillingItem.rejected, (state, action) => {
        state.loading = false;
        state.billingItemDeleted = false;
        state.error = action.error;
      });

    builder
      .addCase(updateBillingItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateBillingItem.fulfilled, (state, action) => {
        state.loading = false;
        state.billingItemUpdated = true;
        state.message = action.payload.message;
      })
      .addCase(updateBillingItem.rejected, (state, action) => {
        state.loading = false;
        state.billingItemUpdated = false;
        state.error = action.error;
      });

    builder
      .addCase(getBillingItemDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBillingItemDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload.item;
      })
      .addCase(getBillingItemDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export {
  createBillingItem,
  updateBillingItem,
  getBillingItems,
  deleteBillingItem,
  getBillingItemDetail,
};

export const { reset } = billingItemSlice.actions;
export default billingItemSlice.reducer;
