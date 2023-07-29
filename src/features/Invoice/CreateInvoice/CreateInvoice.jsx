import { useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import CustomInvoice from "../../../components/custom/CustomInvoice/CustomInvoice";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./styles";
import Invoice from "../../../components/custom/Invoice/Invoice";

export default function CreateInvoice() {
  const [preview, setPreview] = useState( false );
  const [selectedItems, setSelectedItems] = useState( [] );
  const [selectedCustomer, setSelectedCustomer] = useState( null );
  const [dueDate, setDueDate] = useState( null );
  const [pickUpDate, setPickUpDate] = useState( new Date() );
  const [dropOffDate, setDropOffDate] = useState( new Date() );
  const [invoiceDate, setInvoiceDate] = useState( new Date() );
  const [notes, setNotes] = useState( "" );
  const [isRecurring, setIsRecurring] = useState( false );

  const togglePreview = () => setPreview( !preview );
  return (
    <PageLayout>
      <Header pageTitle="Create agreement">
        {preview ? (
          <CustomButton outline width={150} mr={10} onClick={togglePreview}>
            Edit
          </CustomButton>
        ) : (
          <CustomButton outline width={150} mr={10} onClick={togglePreview}>
            Preview
          </CustomButton>
        )}
        <CustomButton width={200}>Save and continue</CustomButton>
      </Header>

      <Content>
        {preview ? (
          <Invoice
            selectedItems={selectedItems}
            selectedCustomer={selectedCustomer}
            notes={notes}
            dueDate={dueDate}
            isRecurring={isRecurring}
          />
        ) : (
          <CustomInvoice
            dropOffDate={dropOffDate}
            pickUpDate={pickUpDate}
            setPickUpDate={setPickUpDate}
            setDropOffDate={setDropOffDate}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
            dueDate={dueDate}
            setInvoiceDate={setInvoiceDate}
            invoiceDate={invoiceDate}
            setDueDate={setDueDate}
            notes={notes}
            setNotes={setNotes}
            isRecurring={isRecurring}
            setIsRecurring={setIsRecurring}
          />
        )}
      </Content>
    </PageLayout>
  );
}
