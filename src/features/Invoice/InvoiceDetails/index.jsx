import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InvoiceSummary from "./components/InvoiceSummary/InvoiceSummary";
import InvoiceInfo from "./components/InvoiceInfo/InvoiceInfo";
import { Content } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInvoiceDetails } from "../../../redux/invoices/reducer";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../components/custom/Spinner/Spinner";
import InvoicePreviewDetail from "../../../components/custom/InvoicePreviewDetails/InvoicePreviewDetails";

export default function InvoiceDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();
  const { invoice, loading } = useSelector((state) => ({
    invoice: state.invoices.invoice,
    loading: state.invoices.loading,
  }));

  useEffect(() => {
    dispatch(getInvoiceDetails(id));
  }, [dispatch, id]);

  return (
    <PageLayout>
      <Header pageTitle={`Invoice # ${invoice?.invoiceNumber}`}>
        {/* <CustomButton outline={true} width={150} mr={10}>
          More Actions
        </CustomButton> */}
        <CustomButton
          outline={true}
          width={250}
          mr={10}
          onClick={() => navigate("/invoices/create")}
        >
          Create another invoice
        </CustomButton>
      </Header>

      <Content>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <InvoiceSummary
              status={invoice?.status}
              customer={invoice?.customer.name}
              dueAt={invoice?.dueAt}
              amountDue={invoice?.amountDue}
            />
            <InvoiceInfo invoice={invoice} />
            <InvoicePreviewDetail invoice={invoice} />
          </>
        )}
      </Content>
    </PageLayout>
  );
}
