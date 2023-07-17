import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expenseCategoriesActionTypes from "./types";
import { getService, postService } from "../../api/apiService";

const createExpenseCategory = createAsyncThunk(
  expenseCategoriesActionTypes.CREATE_CATEGORY,
  async (data) => {
    const result = await postService("/expense-categories/create", data);
    return result;
  }
);

const getExpenseCategories = createAsyncThunk(
  expenseCategoriesActionTypes.GET_ALL_CATEGORIES,
  async () => {
    const result = await getService("/expense-categories");
    return result;
  }
);

const getExpenseBreakdown = createAsyncThunk(
  expenseCategoriesActionTypes.GET_EXPENSE_BREAKDOWN,
  async () => {
    const result = await getService("/expense-breakdown");
    return result;
  }
);

const initialState = {
  loading: false,
  expenseCategories: [],
};

const expenseCategorySlice = createSlice({
  name: "ExpenseCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createExpenseCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createExpenseCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryCreated = true;
      })
      .addCase(createExpenseCategory.rejected, (state, action) => {
        state.loading = false;
        state.categoryCreated = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpenseCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getExpenseCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
      })
      .addCase(getExpenseCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getExpenseBreakdown.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getExpenseBreakdown.fulfilled, (state, action) => {
        state.loading = false;
        state.breakdown = action.payload.data;
      })
      .addCase(getExpenseBreakdown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { createExpenseCategory, getExpenseCategories, getExpenseBreakdown };
export default expenseCategorySlice.reducer;
