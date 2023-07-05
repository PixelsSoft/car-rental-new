import React from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./List.styles";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export default function ServicesList() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Header pageTitle="Service">
        <CustomButton
          outline
          width={150}
          onClick={() => navigate("/services/add")}
        >
          Add new
        </CustomButton>
      </Header>

      <Content>
        <CustomTable mt={20} />
      </Content>
    </PageLayout>
  );
}
