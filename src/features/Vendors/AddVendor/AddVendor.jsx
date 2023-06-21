import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content, Form } from "./AddVendor.styles";

export default function AddVendor() {
  return (
    <PageLayout>
      <Header pageTitle="New Vendor"></Header>

      <Content>
        <Form>
          <InputLeftLabel label="Vendor Name*" />
          <TextArea row label="Description" width={250} mt={20} />

          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton outline width={200} mr={10}>
              Cancel
            </CustomButton>
            <CustomButton width={200}>Save</CustomButton>
          </div>
        </Form>
      </Content>
    </PageLayout>
  );
}
