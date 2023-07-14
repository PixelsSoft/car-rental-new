import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceActionTypes from "./types";
import { postService, getService } from "../../api/apiService";

const createService = createAsyncThunk(
  serviceActionTypes.CREATE_SERVICE,
  async (data) => {
    const result = await postService("/services/create", data);
    return result;
  }
);

const getServices = createAsyncThunk(
  serviceActionTypes.GET_SERVICES,
  async () => {
    const result = await getService("/services");
    return result;
  }
);

const initialState = {
  loading: false,
  services: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.services = [];
      state.serviceCreated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.serviceCreated = false;
      });

    builder
      .addCase(getServices.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload.services;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export { createService, getServices };
export const { reset } = servicesSlice.actions;
export default servicesSlice.reducer;
