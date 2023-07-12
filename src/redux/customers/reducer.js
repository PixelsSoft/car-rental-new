import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerActionTypes from "./types";
import {
  deleteService,
  getService,
  postService,
  putService,
} from "../../api/apiService";

//create customer
const createCustomer = createAsyncThunk(
  customerActionTypes.CREATE_CUSTOMER,
  async (data) => {
    const result = await postService("/customers/create", data);
    return result;
  }
);

// get customers
const getCustomers = createAsyncThunk(
  customerActionTypes.GET_CUSTOMERS,
  async () => {
    const result = await getService("/customers");
    return result;
  }
);

// get customer by id
const getCustomer = createAsyncThunk(
  customerActionTypes.GET_CUSTOMER,
  async (id) => {
    const result = await getService(`/customers/profile/${id}`);
    return result;
  }
);

// edit customer
const editCustomer = createAsyncThunk(
  customerActionTypes.EDIT_CUSTOMER,
  async ({ id, data }) => {
    const result = await putService(`/customers/edit/${id}`, data);
    return result;
  }
);

// delete customer
const deleteCustomer = createAsyncThunk(
  customerActionTypes.DELETE_CUSTOMER,
  async (id) => {
    const result = await deleteService(`/customers/delete/${id}`);
    return result;
  }
);

const initialState = {
  loading: false,
  customers: [],
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.customers = [];
      state.customerCreated = false;
      state.error = null;
      state.message = null;
      state.customerProfile = null;
      state.customerEditSuccess = false;
      state.customerDeleted = false;
    },
  },
  extraReducers: (builder) => {
    // create customer case
    builder
      .addCase(createCustomer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customerCreated = true;
        state.message = action.payload.message;
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.loading = false;
        state.customerCreated = false;
        state.error = action.error.message;
      });

    //get all customers
    builder
      .addCase(getCustomers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload.customers;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.loading = false;
        state.customers = [];
        state.error = action.error;
      });

    // get customer
    builder
      .addCase(getCustomer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customerProfile = action.payload.customer;
      })
      .addCase(getCustomer.rejected, (state, action) => {
        state.loading = false;
        state.customerProfile = null;
        state.error = action.error;
      });

    // edit customer
    builder
      .addCase(editCustomer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customerEditSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(editCustomer.rejected, (state, action) => {
        state.loading = false;
        state.customerEditSuccess = false;
        state.error = action.error;
      });

    // delete customer
    builder
      .addCase(deleteCustomer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customerDeleted = true;
        state.message = action.payload.message;
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = false;
        state.customerDeleted = false;
        state.error = action.payload.error;
      });
  },
});

export {
  createCustomer,
  getCustomers,
  getCustomer,
  editCustomer,
  deleteCustomer,
};

export const { reset } = customersSlice.actions;
export default customersSlice.reducer;
