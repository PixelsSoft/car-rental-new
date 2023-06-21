import PageContainer from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Stats from "./components/Stats/Stats";
import Filters from "./components/Filters/Filters";
import CustomBreadCumb from "../../../components/custom/CustomBreadcumb/CustomBreadcumb";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";

export default function Invoices() {
  const navigate = useNavigate();
  const items = [
    { id: 1, title: "Unpaid", count: 10 },
    { id: 2, title: "Draft", count: 2 },
    { id: 3, title: "All Invoices" },
  ];
  return (
    <PageContainer>
      <Header pageTitle="Invoices">
        <CustomButton width={200} onClick={() => navigate("/invoices/create")}>
          Create invoice
        </CustomButton>
      </Header>
      <Stats />
      <Filters />
      <CustomBreadCumb items={items} />
      <CustomTable mt={20} viewRoute="/invoices/1" />
    </PageContainer>
  );
}
