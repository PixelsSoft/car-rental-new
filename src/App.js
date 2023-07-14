import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Login from "./features/Auth/Login";
import Dashboard from "./features/Dashboard";
import Invoices from "./features/Invoice/Invoices";
import InvoiceDetails from "./features/Invoice/InvoiceDetails";
import RecurringInvoice from "./features/Invoice/RecurringInvoice";
import CustomersList from "./features/Customers/CustomersList/CustomersList";
import BillsList from "./features/Bills/BillsList/BillsList";
import VendorsList from "./features/Vendors/VendorsList/VendorsList";
import VehiclesList from "./features/Vehicles/VehiclesList/VehiclesList";
import CreateInvoice from "./features/Invoice/CreateInvoice/CreateInvoice";
import AddCustomer from "./features/Customers/AddCustomer";
import CustomerProfile from "./features/Customers/CustomerProfile/CustomerProfile";
import AddVendor from "./features/Vendors/AddVendor/AddVendor";
import AddVehicle from "./features/Vehicles/AddVehicle/AddVehicle";
import Settings from "./features/Settings/Settings";
import Calendar from "./features/Calendar/Calendar";
import ServicesList from "./features/Service/List/List";
import CreateService from "./features/Service/CreateService/CreateService";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditVehicle from "./features/Vehicles/EditVehicle/EditVehicle";
import EditCustomer from "./features/Customers/EditCustomer/EditCustomer";
import EditInvoice from "./features/Invoice/EditInvoice/EditInvoice";
import BillingItemsList from "./features/BillingItems/BillingItemsList/BillingItemList";
import CreateBillingItem from "./features/BillingItems/CreateBillingItem/CreateBillingItem";
import EditBillingItem from "./features/BillingItems/EditBillingItem/EditBillingItem";
import EditVendor from "./features/Vendors/EditVendor/EditVendor";
import AddBill from "./features/Bills/AddBill/AddBill";
import EditBill from "./features/Bills/EditBill/EditBill";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/create" element={<CreateInvoice />} />
        <Route path="/invoices/details/:id" element={<InvoiceDetails />} />
        <Route path="/invoices/edit/:id" element={<EditInvoice />} />
        <Route path="/recurring-invoices" element={<RecurringInvoice />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customers/:id" element={<CustomerProfile />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/customers/edit/:id" element={<EditCustomer />} />
        <Route path="/bills" element={<BillsList />} />
        <Route path="/bills/add" element={<AddBill />} />
        <Route path="/bills/edit/:id" element={<EditBill />} />
        <Route path="/vendors" element={<VendorsList />} />
        <Route path="/vendors/add" element={<AddVendor />} />
        <Route path="/vendors/edit/:id" element={<EditVendor />} />
        <Route path="/vehicles" element={<VehiclesList />} />
        <Route path="/vehicles/add" element={<AddVehicle />} />
        <Route path="/vehicles/edit/:id" element={<EditVehicle />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/add" element={<CreateService />} />
        <Route path="/billing-products" element={<BillingItemsList />} />
        <Route path="/billing-products/new" element={<CreateBillingItem />} />
        <Route
          path="/billing-products/edit/:id"
          element={<EditBillingItem />}
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
