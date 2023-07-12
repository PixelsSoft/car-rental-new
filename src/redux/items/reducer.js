import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemsActionTypes from "./actions";

import {
  postService,
  getService,
  putService,
  deleteService,
} from "../../api/apiService";

// create new item
const createNewItem = createAsyncThunk(
  itemsActionTypes.CREATE_ITEM,
  async (data) => {
    const result = await postService("/items/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return result;
  }
);

//get all items
const getItems = createAsyncThunk(itemsActionTypes.GET_ALL_ITEMS, async () => {
  const result = await getService("/items");
  return result;
});

// get single item detail
const getItemById = createAsyncThunk(
  itemsActionTypes.GET_ITEM_BY_ID,
  async (id) => {
    const result = await getService(`/items/details/${id}`);
    return result;
  }
);

// edit item
const editItem = createAsyncThunk(itemsActionTypes.EDIT_ITEM, async (data) => {
  const { id, formData } = data;
  const result = await putService(`/items/edit/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return result;
});

// delete item
const deleteItem = createAsyncThunk(
  itemsActionTypes.DELETE_ITEM,
  async (id) => {
    const result = await deleteService("/items/delete/" + id);
    return result;
  }
);

const initialState = {
  loading: false,
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.items = [];
      state.message = null;
      state.newItemCreated = false;
      state.itemEditedSuccess = false;
      state.itemDeleted = false;
    },
  },
  extraReducers: (builder) => {
    //create new item
    builder
      .addCase(createNewItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createNewItem.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.newItemCreated = true;
      })
      .addCase(createNewItem.rejected, (state, action) => {
        state.loading = false;
        state.newItemCreated = false;
        state.error = action.error;
      });

    // get all items
    builder
      .addCase(getItems.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });

    // get single item details
    builder
      .addCase(getItemById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload.item;
      })
      .addCase(getItemById.rejected, (state, action) => {
        state.loading = false;
        state.item = null;
        state.error = action.error;
      });

    //edit item
    builder
      .addCase(editItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.itemEditedSuccess = true;
      })
      .addCase(editItem.rejected, (state, action) => {
        state.loading = false;
        state.itemEditedSuccess = false;
        state.error = action.error;
      });

    //delete item
    builder
      .addCase(deleteItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.loading = false;
        state.itemDeleted = true;
        state.message = action.payload.message;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.itemDeleted = false;
        state.error = action.error;
      });
  },
});

export { createNewItem, getItems, getItemById, editItem, deleteItem };
export const { reset } = itemsSlice.actions;
export default itemsSlice.reducer;
