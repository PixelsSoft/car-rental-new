import { configureStore } from "@reduxjs/toolkit";

import invoicesReducer from "./invoices/reducer";
import itemsReducer from "./items/reducer";
import customersReducer from "./customers/reducer";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    items: itemsReducer,
    customers: customersReducer,
  },
});

export default store;
