import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./VehiclesList.styles";
export default function VehiclesList() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Header pageTitle="Vehicles">
        <CustomButton width={200} onClick={() => navigate("/vehicles/add")}>
          Add a vehicle
        </CustomButton>
      </Header>

      <Content>
        <CustomTable mt={40} />
      </Content>
    </PageLayout>
  );
}
