import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { LinkText } from "../Text/Text";
import InputLeftLabel from "../InputLeftLabel/InputLeftLabel";
import SelectLeftLabel from "../SelectLeftLabel/SelectLeftLabel";
import TextArea from "../TextArea/TextArea";
import CustomButton from "../CustomButton/CustomButton";
import { ButtonsContainer } from "./RecordPayment.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createPaymentRecord,
  reset as paymentRecordsReset,
} from "../../../redux/payment-records/reducer";
import { toast } from "react-toastify";
import { getAllInvoices } from "../../../redux/invoices/reducer";

export default function RecordPayment({
  paymentMethods,
  paymentAccounts,
  invoice,
}) {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);
  const [selectedPaymentAccount, setSelectedPaymentAccount] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [date, setDate] = useState( new Date() );

  const selectPaymentAccount = (selection) => setSelectedPaymentAccount(selection);
  const selectPaymentMethod = (selection) =>  setSelectedPaymentMethod(selection);

  const dispatch = useDispatch();
  const { paymentRecordCreated, message, error } = useSelector((state) => ({
    loading: state.paymentRecords.loading,
    paymentRecordCreated: state.paymentRecords.paymentRecordCreated,
    message: state.paymentRecords.message,
    error: state.paymentRecords.error,
  }));

  const handleSubmit = () => {
    dispatch(
      createPaymentRecord({
        invoice,
        paymentAccount: selectedPaymentAccount,
        paymentMethod: selectedPaymentMethod,
        amount,
        memo,
      })
    );
    setIsOpen(false);
  };

  const reset = () => {
    setMemo("");
    setSelectedPaymentMethod(null);
    setSelectedPaymentAccount(null);
    setAmount(0);
  };

  useEffect(() => {
    if (paymentRecordCreated) {
      toast.success(message, { toastId: "success-message" });
      reset();
      dispatch(paymentRecordsReset());
      dispatch(getAllInvoices());
    }
  }, [message, paymentRecordCreated, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    setAmount(invoice?.amountDue);
  }, [error]);

  return (
    <>
      <LinkText onClick={toggle} mr={8}>
        Record Payment
      </LinkText>
      <Modal
        open={open}
        title="Record a payment for this invoice"
        onClose={() => setIsOpen(false)}
      >
        <div style={{ width: "50%" }}>
          <InputLeftLabel
            width={300}
            label="Payment Date"
            value={date.toISOString().slice( 0, 10 )}
            type='date'
            />
          <InputLeftLabel
            width={295}
            label="Amount"
            mt={30}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
           />
          <SelectLeftLabel
            label="Payment Account"
            placeholder="Select payment account"
            mt={30}
            width={300}
            items={paymentAccounts}
            accessor="name"
            value={selectedPaymentAccount?.name}
            onItemSelect={selectPaymentAccount}
            />
          <SelectLeftLabel
            label="Payment Method"
            placeholder="Select payment method"
            mt={30}
            items={paymentMethods}
            accessor="name"
            value={selectedPaymentMethod?.name}
            onItemSelect={selectPaymentMethod}
            width={300}
            />
          <TextArea
            label="Memo"
            row={true}
            width={300}
            mt={30}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            />
        </div>
        <ButtonsContainer>
          <CustomButton
            width={150}
            outline
            mr={10}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Cancel
          </CustomButton>
          <CustomButton width={150} onClick={handleSubmit}>
            Save
          </CustomButton>
        </ButtonsContainer>
      </Modal>
    </>
  );
}
