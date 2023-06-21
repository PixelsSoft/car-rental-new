import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import Header from "../../components/custom/Header/Header";
import { Content, Section, SectionTitle, Form } from "./styles";
import CustomButton from "../../components/custom/CustomButton/CustomButton";
import InputLeftLabel from "../../components/custom/InputLeftLabel/InputLeftLabel";

export default function Settings() {
  return (
    <PageLayout>
      <Header pageTitle="Settings" />

      <Content>
        <Section>
          <SectionTitle>Personal Information</SectionTitle>
          <Form>
            <InputLeftLabel label="First Name" mt={20} />
            <InputLeftLabel label="Last Name" mt={20} />
            <InputLeftLabel label="Email" mt={20} />
          </Form>
        </Section>

        <Section>
          <SectionTitle>Change Password</SectionTitle>
          <Form>
            <InputLeftLabel label="Password" mt={20} />
            <InputLeftLabel label="Confirm Password" mt={20} />
          </Form>
        </Section>

        <div id="buttons-group">
          <CustomButton width={200} outline mr={10}>
            Cancel
          </CustomButton>
          <CustomButton width={200}>Update</CustomButton>
        </div>
      </Content>
    </PageLayout>
  );
}
