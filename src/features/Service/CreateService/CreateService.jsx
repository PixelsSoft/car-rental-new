import React from "react";

import { Content } from "./CreateService.styles";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";

export default function CreateService() {
  return (
    <PageLayout>
      <Header pageTitle="New Service" />

      <Content>
        <InputLeftLabel label="Select Car" mt={20} type="" />
        <InputLeftLabel label="Date" mt={20} type="date" />
        <InputLeftLabel label="Return Date" mt={20} type="date" />
        <TextArea row label="Description" mt={20} />

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <CustomButton outline width={200} mr={10}>
            Cancel
          </CustomButton>
          <CustomButton width={200}>Save</CustomButton>
        </div>
      </Content>
    </PageLayout>
  );
}
