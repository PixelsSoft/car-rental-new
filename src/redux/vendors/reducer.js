import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vendorActionTypes from "./types";
import {
  deleteService,
  getService,
  postService,
  putService,
} from "../../api/apiService";

const createVendor = createAsyncThunk(
  vendorActionTypes.CREATE_VENDOR,
  async (data) => {
    const result = await postService("/vendors/create", data);
    return result;
  }
);

const getVendors = createAsyncThunk(vendorActionTypes.GET_VENDORS, async () => {
  const result = await getService("/vendors");
  return result;
});

const getVendorById = createAsyncThunk(
  vendorActionTypes.GET_VENDOR_BY_ID,
  async (id) => {
    const result = await getService("/vendors/details/" + id);
    return result;
  }
);

const deleteVendor = createAsyncThunk(
  vendorActionTypes.DELETE_VENDOR,
  async (id) => {
    const result = await deleteService("/vendors/delete/" + id);
    return result;
  }
);

const editVendor = createAsyncThunk(
  vendorActionTypes.UPDATE_VENDOR,
  async (data) => {
    const result = putService("/vendors/edit/" + data.id, data);
    return result;
  }
);

const initialState = {
  loading: false,
  vendors: [],
  vendorCreated: false,
  vendorDeleted: false,
  vendorUpdated: false,
  message: null,
  error: null,
};

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.vendors = [];
      state.vendorCreated = false;
      state.vendorDeleted = false;
      state.vendorUpdated = false;
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // create vendor
    builder
      .addCase(createVendor.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.loading = false;
        state.vendorCreated = false;
        state.error = action.error;
      });

    builder
      .addCase(getVendors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors = action.payload.vendors;
      })
      .addCase(getVendors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    builder
      .addCase(editVendor.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorUpdated = true;
        state.message = action.payload.message;
      })
      .addCase(editVendor.rejected, (state, action) => {
        state.loading = false;
        state.vendorUpdated = false;
        state.error = action.error;
      });

    builder
      .addCase(deleteVendor.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorDeleted = true;
        state.message = action.payload.message;
      })
      .addCase(deleteVendor.rejected, (state, action) => {
        state.loading = false;
        state.vendorDeleted = false;
        state.error = action.error;
      });

    builder
      .addCase(getVendorById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getVendorById.fulfilled, (state, action) => {
        state.loading = false;
        state.vendor = action.payload.vendor;
      })
      .addCase(getVendorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export { createVendor, deleteVendor, editVendor, getVendors, getVendorById };

export const { reset } = vendorsSlice.actions;
export default vendorsSlice.reducer;
