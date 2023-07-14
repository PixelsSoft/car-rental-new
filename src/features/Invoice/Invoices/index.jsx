import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
import {
  deleteInvoice,
  getAllInvoices,
  reset as InvoiceReset,
} from "../../../redux/invoices/reducer";
import Status from "../../../components/custom/Status/Status";
import TableActionDropdown from "../../../components/custom/TableActionDropdown/TableActionDropdown";
import RecordPayment from "../../../components/custom/RecordPayment/RecordPayment";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { getAllPaymentMethods } from "../../../redux/payment-methods/reducer";
import { getAllPaymentAccounts } from "../../../redux/payment-accounts/reducer";
import Modal from "../../../components/custom/Modal/Modal";
import { ButtonsContainer } from "./styles";
import { toast } from "react-toastify";

export default function Invoices() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);

  const navigate = useNavigate();
  const items = [
    { id: 1, title: "Unpaid", count: 10 },
    { id: 2, title: "Draft", count: 2 },
    { id: 3, title: "All Invoices" },
  ];

  const dispatch = useDispatch();

  const onDelete = (id) => {
    setInvoiceId(id);
    setDeleteModal(true);
  };

  const onEdit = (id) => navigate("/invoices/edit/" + id);

  const {
    loading,
    invoices,
    paymentMethods,
    paymentAccounts,
    invoiceDeleted,
    message,
    error,
  } = useSelector((state) => ({
    loading: state.invoices.loading,
    invoices: state.invoices.invoices,
    paymentMethods: state.paymentMethods.paymentMethods,
    paymentAccounts: state.paymentAccounts.paymentAccounts,
    invoiceDeleted: state.invoices.invoiceDeleted,
    error: state.invoices.error,
    message: state.invoices.message,
  }));

  const closeDeleteModal = () => {
    setInvoiceId(null);
    setDeleteModal(false);
  };

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
    dispatch(getAllPaymentMethods());
    dispatch(getAllPaymentAccounts());
  }, [dispatch]);

  const handleDeleteInvoice = () => {
    dispatch(deleteInvoice(invoiceId));
    setDeleteModal(false);
  };

  useEffect(() => {
    if (invoiceDeleted) {
      toast.success(message);
      dispatch(InvoiceReset());
      dispatch(getAllInvoices());
    }
  }, [invoiceDeleted, message, dispatch]);

  useEffect(() => {
    if (error) toast.error(error, { toastId: "invoice-error" });
  }, [error]);

  return (
    <>
      <PageContainer>
        <Header pageTitle="Invoices">
          <CustomButton
            width={200}
            onClick={() => navigate("/invoices/create")}
          >
            Create invoice
          </CustomButton>
        </Header>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
                      <RecordPayment
                        paymentMethods={paymentMethods}
                        paymentAccounts={paymentAccounts}
                        invoice={invoice}
                      />
                      <TableActionDropdown
                        viewRoute={`/invoices/details/${invoice._id}`}
                        onDelete={() => onDelete(invoice._id)}
                        onEdit={() => onEdit(invoice._id)}
                      />
                    </div>
                  </TDataAction>
                </TRow>
              ))}
            </Table>
          </>
        )}
      </PageContainer>
      <Modal
        title="Delete invoice?"
        open={deleteModal}
        onClose={closeDeleteModal}
      >
        <p>Are you sure you want to delete this invoice?</p>

        <ButtonsContainer>
          <CustomButton outline mr={10} width={100} onClick={closeDeleteModal}>
            Cancel
          </CustomButton>
          <CustomButton width={100} onClick={handleDeleteInvoice}>
            Confirm
          </CustomButton>
        </ButtonsContainer>
      </Modal>
    </>
  );
}
