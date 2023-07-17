import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import { Content, ButtonsContainer } from "./BillsList.styles";
import SelectWithSearch from "../../../components/custom/SelectWithSearch/SelectWithSearch";
import OutlineCustomInput from "../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteBill,
  reset as billsReset,
  getBills,
} from "../../../redux/bills/reducer";
import {
  Table,
  TData,
  THead,
  TRow,
  TDataAction,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import moment from "moment";

import TableActionDropdown from "../../../components/custom/TableActionDropdown/TableActionDropdown";
import Status from "../../../components/custom/Status/Status";
import BillRecordPayment from "../../../components/custom/BillRecordPayment/BillRecordPayment";
import { getAllPaymentAccounts } from "../../../redux/payment-accounts/reducer";
import { getAllPaymentMethods } from "../../../redux/payment-methods/reducer";
import Modal from "../../../components/custom/Modal/Modal";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function BillsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [billId, setBillId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const openModal = (id) => {
    setBillId(id);
    setDeleteModal(true);
  };
  const closeModal = () => {
    setBillId(null);
    setDeleteModal(false);
  };

  const {
    bills,
    paymentAccounts,
    paymentMethods,
    billDeleted,
    message,
    loading,
    billRecordCreated,
  } = useSelector((state) => ({
    bills: state.bills.bills,
    paymentMethods: state.paymentMethods.paymentMethods,
    paymentAccounts: state.paymentAccounts.paymentAccounts,
    billDeleted: state.bills.billDeleted,
    message: state.bills.message,
    loading: state.bills.loading,
    billRecordCreated: state.bills.billRecordCreated,
  }));

  const handleDeleteBill = () => {
    dispatch(deleteBill(billId));
    closeModal();
  };

  const headers = [
    "Status",
    "Date",
    "Number",
    "Vendor",
    "Due Date",
    "Amount Due",
    "Actions",
  ];

  useEffect(() => {
    dispatch(getAllPaymentAccounts());
    dispatch(getAllPaymentMethods());
    console.log("first");
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBills());
    console.log("second");
  }, [dispatch]);

  useEffect(() => {
    if (billDeleted || billRecordCreated) {
      toast.success(message, { toastId: "bill-success" });
      dispatch(billsReset());
      dispatch(getBills());
      console.log("third");
    }
  }, [dispatch, billDeleted, message, billRecordCreated]);

  return (
    <>
      <PageLayout>
        <Header pageTitle="Bills">
          <CustomButton width={200} onClick={() => navigate("/bills/add")}>
            Create Bill
          </CustomButton>
        </Header>

        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div id="filters" style={{ marginBottom: 20 }}>
                <SelectWithSearch placeholder="All Vendors" width={350} />
                <OutlineCustomInput
                  placeholder="From"
                  inputType="date"
                  ml={10}
                  width={200}
                />
                <OutlineCustomInput
                  placeholder="To"
                  inputType="date"
                  ml={10}
                  width={200}
                />
              </div>

              <Table mt={20}>
                <TRow>
                  {headers.map((header) => (
                    <THead>{header}</THead>
                  ))}
                </TRow>

                {bills.map((bill) => (
                  <TRow>
                    <TData>
                      <Status status={bill?.status} />
                    </TData>
                    <TData>{moment(bill?.date).format("LL")}</TData>
                    <TData>{bill?.billNumber}</TData>
                    <TData>{bill?.vendor?.name}</TData>
                    <TData>{moment(bill?.dueAt, "YYYYMMDD").fromNow()}</TData>
                    {/* <TData>{0}</TData> */}
                    <TData>${bill?.amountDue}</TData>
                    <TDataAction>
                      <div>
                        <BillRecordPayment
                          bill={bill}
                          paymentAccounts={paymentAccounts}
                          paymentMethods={paymentMethods}
                        />
                        <TableActionDropdown
                          onDelete={() => openModal(bill._id)}
                          onEdit={() => navigate("/bills/edit/" + bill._id)}
                        />
                      </div>
                    </TDataAction>
                  </TRow>
                ))}
              </Table>
            </>
          )}
        </Content>
      </PageLayout>
      <Modal open={deleteModal} onClose={closeModal} title="Delete Bill?">
        <p style={{ padding: 10 }}>Are you sure you want to delete?</p>
        <p
          style={{
            padding: 10,
            color: "red",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Note: All invoices related to this customer will also be deleted.
        </p>

        <ButtonsContainer>
          <CustomButton
            width={100}
            outline
            mr={10}
            type="button"
            onClick={closeModal}
          >
            Cancel
          </CustomButton>
          <CustomButton width={100} onClick={handleDeleteBill}>
            Yes
          </CustomButton>
        </ButtonsContainer>
      </Modal>
    </>
  );
}
