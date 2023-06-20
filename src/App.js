import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Login from "./features/Auth/Login";
import Dashboard from "./features/Dashboard";
import Invoices from "./features/Invoice/Invoices";
import InvoiceDetails from "./features/Invoice/InvoiceDetails";
import RecurringInvoice from "./features/Invoice/RecurringInvoice";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:id" element={<InvoiceDetails />} />
        <Route path="/recurring-invoices" element={<RecurringInvoice />} />
      </Routes>
    </>
  );
}
