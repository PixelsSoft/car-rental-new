import React from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./List.styles";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";

export default function ServicesList() {
  return (
    <PageLayout>
      <Header pageTitle="Service"></Header>

      <Content>
        <CustomTable mt={20} />
      </Content>
    </PageLayout>
  );
}
