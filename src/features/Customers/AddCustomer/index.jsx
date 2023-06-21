import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import { FormContainer, Section, SectionTitle, Form } from "./styles";
import TextArea from "../../../components/custom/TextArea/TextArea";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";

export default function AddCustomer() {
  return (
    <PageLayout>
      <Header pageTitle="New Customer"></Header>

      <FormContainer>
        <Section>
          <SectionTitle>Basic information</SectionTitle>
          <Form>
            <InputLeftLabel label="Customer*" width={250} />
            <InputLeftLabel label="First Name" width={250} mt={12} />
            <InputLeftLabel label="Last Name" width={250} mt={12} />
            <InputLeftLabel label="Email" width={250} mt={12} />
            <InputLeftLabel label="Phone Number" width={250} mt={12} />
            <InputLeftLabel label="Account Number" width={250} mt={12} />
            <TextArea label="Notes" row width={250} mt={12} />
          </Form>
        </Section>
        <div id="buttons">
          <CustomButton outline width={100}>
            Cancel
          </CustomButton>
          <CustomButton width={100} ml={10}>
            Save
          </CustomButton>
        </div>
      </FormContainer>
    </PageLayout>
  );
}
