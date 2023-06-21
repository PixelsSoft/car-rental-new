import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { Content } from "./VendorsList.styles";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";

export default function VendorsList() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Header pageTitle="Vendors">
        <CustomButton outline width={200} mr={10}>
          Import from CSV
        </CustomButton>
        <CustomButton width={200} onClick={() => navigate("/vendors/add")}>
          Add a vendor
        </CustomButton>
      </Header>

      <Content>
        <CustomTable mt={20} />
      </Content>
    </PageLayout>
  );
}
