import { configureStore } from "@reduxjs/toolkit";

import invoicesReducer from "./invoices/reducer";
import itemsReducer from "./items/reducer";
import customersReducer from "./customers/reducer";
import paymentMethodsReducer from "./payment-methods/reducer";
import paymentAccountsReducer from "./payment-accounts/reducer";
import paymentRecordsReducer from "./payment-records/reducer";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    items: itemsReducer,
    customers: customersReducer,
    paymentMethods: paymentMethodsReducer,
    paymentAccounts: paymentAccountsReducer,
    paymentRecords: paymentRecordsReducer,
  },
});

export default store;
