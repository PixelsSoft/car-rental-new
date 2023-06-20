import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InvoiceSummary from "./components/InvoiceSummary/InvoiceSummary";
import InvoiceInfo from "./components/InvoiceInfo/InvoiceInfo";
import { Content } from "./styles";
import Invoice from "../../../components/custom/Invoice/Invoice";

export default function InvoiceDetails() {
  return (
    <PageLayout>
      <Header pageTitle="Invoice # 5772">
        <CustomButton outline={true} width={150} mr={10}>
          More Actions
        </CustomButton>
        <CustomButton outline={true} width={250} mr={10}>
          Create another invoice
        </CustomButton>
      </Header>

      <Content>
        <InvoiceSummary />
        <InvoiceInfo />
        <Invoice />
      </Content>
    </PageLayout>
  );
}
