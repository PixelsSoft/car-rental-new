import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomInvoice from "../../../components/custom/CustomInvoice/CustomInvoice";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceDetails } from "../../../redux/invoices/reducer";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditInvoice() {
  //   const [preview, setPreview] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [notes, setNotes] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  //   const togglePreview = () => setPreview(!preview);

  const dispatch = useDispatch();
  const { id } = useParams();

  const { invoice, error } = useSelector((state) => ({
    invoice: state.invoices.invoice,
    loading: state.invoices.loading,
    error: state.invoices.error,
  }));

  useEffect(() => {
    dispatch(getInvoiceDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (invoice) {
      setSelectedCustomer(invoice.customer);
      setSelectedItems(invoice.items);
      setNotes(invoice.notes);
      setIsRecurring(invoice.isRecurring);
    }
  }, [invoice]);

  useEffect(() => {
    if (error) toast.error(error, { toastId: "invoice-error" });
  }, [error]);

  console.log(invoice);
  return (
    <PageLayout>
      <Header pageTitle="Edit invoice">
        {/* {preview ? (
          <CustomButton outline width={150} mr={10} onClick={togglePreview}>
            Edit
          </CustomButton>
        ) : (
          <CustomButton outline width={150} mr={10} onClick={togglePreview}>
            Preview
          </CustomButton>
        )} */}
        {/* <CustomButton width={200}>Save and continue</CustomButton> */}
      </Header>

      <Content>
        {/* {preview ? (
          <Invoice
            selectedItems={selectedItems}
            selectedCustomer={selectedCustomer}
            notes={notes}
            dueDate={dueDate}
            isRecurring={isRecurring}
          />
        ) : ( */}
        <CustomInvoice
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          selectedCustomer={selectedCustomer}
          setSelectedCustomer={setSelectedCustomer}
          dueDate={dueDate}
          setDueDate={setDueDate}
          notes={notes}
          setNotes={setNotes}
          isRecurring={isRecurring}
          setIsRecurring={setIsRecurring}
          forEditInvoice={invoice}
        />
        {/* )} */}
      </Content>
    </PageLayout>
  );
}
