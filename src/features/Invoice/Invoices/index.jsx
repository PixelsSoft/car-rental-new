import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";

import PageContainer from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Stats from "./components/Stats/Stats";
import Filters from "./components/Filters/Filters";
import CustomBreadCumb from "../../../components/custom/CustomBreadcumb/CustomBreadcumb";
import {
  Table,
  TData,
  THead,
  TRow,
  TDataAction,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import { getAllInvoices } from "../../../redux/invoices/reducer";
import Status from "../../../components/custom/Status/Status";
import TableActionDropdown from "../../../components/custom/TableActionDropdown/TableActionDropdown";
import RecordPayment from "../../../components/custom/RecordPayment/RecordPayment";

export default function Invoices() {
  const navigate = useNavigate();
  const items = [
    { id: 1, title: "Unpaid", count: 10 },
    { id: 2, title: "Draft", count: 2 },
    { id: 3, title: "All Invoices" },
  ];

  const dispatch = useDispatch();

  const { loading, invoices } = useSelector((state) => ({
    loading: state.invoices.loading,
    invoices: state.invoices.invoices,
  }));

  const headers = [
    "Status",
    "Due",
    "Date",
    "Number",
    "Customer",
    "Unpaid by customer",
    "Amount Due",
    "Actions",
  ];

  useEffect(() => {
    dispatch(getAllInvoices());
  }, [dispatch]);

  return (
    <PageContainer>
      <Header pageTitle="Invoices">
        <CustomButton width={200} onClick={() => navigate("/invoices/create")}>
          Create invoice
        </CustomButton>
      </Header>
      <Stats />
      <Filters />
      <CustomBreadCumb items={items} />
      <Table mt={20}>
        <TRow>
          {headers.map((header) => (
            <THead>{header}</THead>
          ))}
        </TRow>

        {invoices.map((invoice) => (
          <TRow>
            <TData>
              <Status status={invoice.status} />
            </TData>
            <TData>{moment(invoice.dueAt, "YYYYMMDD").fromNow()}</TData>
            <TData>{moment(invoice.createdAt).format("LL")}</TData>
            <TData>{invoice.invoiceNumber}</TData>
            <TData>{invoice.customer.name}</TData>
            <TData>{0}</TData>
            <TData>${invoice.amountDue}</TData>
            <TDataAction>
              <div>
                <RecordPayment />
                <TableActionDropdown viewRoute="" />
              </div>
            </TDataAction>
          </TRow>
        ))}
      </Table>
    </PageContainer>
  );
}
