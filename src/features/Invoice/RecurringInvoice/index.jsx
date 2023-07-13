import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import CustomBreadcumb from "../../../components/custom/CustomBreadcumb/CustomBreadcumb";
import { Content } from "./styles";
import SelectWithSearch from "../../../components/custom/SelectWithSearch/SelectWithSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Status from "../../../components/custom/Status/Status";
import TableActionDropdown from "../../../components/custom/TableActionDropdown/TableActionDropdown";
import moment from "moment";
import {
  Table,
  TData,
  THead,
  TRow,
  TDataAction,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import { useEffect } from "react";
import { getRecurringInvoices } from "../../../redux/invoices/reducer";

export default function RecurringInvoice() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { recurringInvoices } = useSelector((state) => ({
    recurringInvoices: state.invoices.recurringInvoices,
  }));

  const headers = [
    "Status",
    "Customer",
    "Previous invoice",
    "Invoice amount",
    "Actions",
  ];

  useEffect(() => {
    dispatch(getRecurringInvoices());
  }, [dispatch]);

  console.log(recurringInvoices);
  return (
    <PageLayout>
      <Header pageTitle="Recurring Invoice">
        <CustomButton width={250} onClick={() => navigate("/invoices/create")}>
          Create a recurring invoice
        </CustomButton>
      </Header>

      <Content>
        <SelectWithSearch
          placeholder="All Customers"
          width={300}
          mt={20}
          mb={20}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomBreadcumb
            items={[
              { id: 1, title: "Active", count: 15 },
              { id: 2, title: "Draft", count: 15 },
              { id: 3, title: "All recurring invoices" },
            ]}
          />
        </div>

        <Table mt={20}>
          <TRow>
            {headers.map((header) => (
              <THead>{header}</THead>
            ))}
          </TRow>

          {recurringInvoices?.map((invoice) => (
            <TRow>
              <TData>
                <Status status={invoice.status} />
              </TData>
              <TData>{invoice.customer.name}</TData>
              <TData>
                {moment(
                  invoice.invoices[invoice.invoices.length - 1].createdAt
                ).format("LL")}
              </TData>
              <TData>${invoice.amount}</TData>
              <TDataAction>
                <div>
                  <TableActionDropdown viewRoute="" />
                </div>
              </TDataAction>
            </TRow>
          ))}
        </Table>
      </Content>
    </PageLayout>
  );
}
