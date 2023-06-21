import { useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import CustomInvoice from "../../../components/custom/CustomInvoice/CustomInvoice";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./styles";
import Invoice from "../../../components/custom/Invoice/Invoice";

export default function CreateInvoice() {
  const [preview, setPreview] = useState(false);

  const togglePreview = () => setPreview(!preview);
  return (
    <PageLayout>
      <Header pageTitle="Create invoice">
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

      <Content>{preview ? <Invoice /> : <CustomInvoice />}</Content>
    </PageLayout>
  );
}
