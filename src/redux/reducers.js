import { configureStore } from "@reduxjs/toolkit";

import invoicesReducer from "./invoices/reducer";
import itemsReducer from "./items/reducer";
import customersReducer from "./customers/reducer";
import paymentMethodsReducer from "./payment-methods/reducer";
import paymentAccountsReducer from "./payment-accounts/reducer";
import paymentRecordsReducer from "./payment-records/reducer";
import billsReducer from "./bills/reducer";
import vendorsReducer from "./vendors/reducer";
import billingItemsReducer from "./billing-items/reducer";
import servicesReducer from "./service/reducer";
import authReducer from "./auth/reducer";
import expenseCategoryReducer from "./expense-category/reducer";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    items: itemsReducer,
    customers: customersReducer,
    paymentMethods: paymentMethodsReducer,
    paymentAccounts: paymentAccountsReducer,
    paymentRecords: paymentRecordsReducer,
    bills: billsReducer,
    billingItems: billingItemsReducer,
    vendors: vendorsReducer,
    services: servicesReducer,
    auth: authReducer,
    expenseCategories: expenseCategoryReducer,
  },
});

export default store;
