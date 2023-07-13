import { useTheme } from "styled-components";
import { Card, CardBody, Container } from "./InvoiceInfo.styles";
import { FaFileInvoice, FaLocationArrow } from "react-icons/fa";
import CustomButton from "../../../../../components/custom/CustomButton/CustomButton";
import moment from "moment";
import RecordPayment from "../../../../../components/custom/RecordPayment/RecordPayment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaymentMethods } from "../../../../../redux/payment-methods/reducer";
import { getAllPaymentAccounts } from "../../../../../redux/payment-accounts/reducer";
import { getInvoiceDetails } from "../../../../../redux/invoices/reducer";
import { toast } from "react-toastify";
export default function InvoiceInfo({ invoice }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const {
    paymentAccounts,
    paymentMethods,
    paymentRecordCreated,
    message,
    error,
  } = useSelector((state) => ({
    paymentAccounts: state.paymentAccounts.paymentAccounts,
    paymentMethods: state.paymentMethods.paymentMethods,
    paymentRecordCreated: state.paymentRecords.paymentRecordCreated,
    error: state.paymentRecords.error,
  }));

  useEffect(() => {
    dispatch(getAllPaymentMethods());
    dispatch(getAllPaymentAccounts());
  }, [dispatch]);

  useEffect(() => {
    if (paymentRecordCreated) {
      dispatch(getInvoiceDetails(invoice?._id));
    }
  }, [dispatch, invoice?._id, paymentRecordCreated]);

  useEffect(() => {
    if (error) {
      toast.error(error.message, { toastId: "record-payment-error" });
    }
  }, [message, error]);

  console.log(error);
  return (
    <>
      <Container>
        <Card>
          {/* <IconContainer> */}
          <FaFileInvoice size={24} color={theme.colors.primary} />
          {/* </IconContainer> */}

          <CardBody>
            <h2>Create</h2>
            <p>
              <strong>Created:</strong> on{" "}
              {moment(invoice?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}{" "}
              {invoice?.isRecurring && "from recurring invoice"}
            </p>
          </CardBody>

          <div>
            <CustomButton outline width={180}>
              Edit Invoice
            </CustomButton>
          </div>
        </Card>

        <Card>
          {/* <IconContainer> */}
          <FaLocationArrow size={24} color={theme.colors.primary} />
          {/* </IconContainer> */}

          <CardBody>
            <h2>Send</h2>
            <p>
              <strong>Last Payment:</strong>{" "}
              {invoice?.paymentRecords?.length < 1
                ? "Never"
                : moment(
                    invoice?.paymentRecords[invoice.paymentRecords.length - 1]
                      .paymentDate
                  ).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </CardBody>

          <div>
            <RecordPayment
              invoice={invoice}
              paymentAccounts={paymentAccounts}
              paymentMethods={paymentMethods}
            />
          </div>
        </Card>

        {/* <Card>
          <IconContainer>
            <FaMoneyBill size={24} color={theme.colors.primary} />
          </IconContainer>
          <CardBody>
            <h2>Get Paid</h2>
            <p>
              <strong>Amount due:</strong> ${invoice?.amountDue}
            </p>
            <p>
              <strong>Status:</strong> Your invoice is {invoice?.status}
            </p>
          </CardBody>
        </Card> */}
      </Container>
    </>
  );
}
