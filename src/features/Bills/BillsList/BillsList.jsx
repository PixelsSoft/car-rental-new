import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./BillsList.styles";
import SelectWithSearch from "../../../components/custom/SelectWithSearch/SelectWithSearch";
import OutlineCustomInput from "../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";

export default function BillsList() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Header pageTitle="Bills">
        <CustomButton width={200} onClick={() => navigate("/invoices/create")}>
          Create Bill
        </CustomButton>
      </Header>

      <Content>
        <div id="filters">
          <SelectWithSearch placeholder="All Vendors" width={350} />
          <OutlineCustomInput
            placeholder="From"
            inputType="date"
            ml={10}
            width={200}
          />
          <OutlineCustomInput
            placeholder="To"
            inputType="date"
            ml={10}
            width={200}
          />
        </div>

        <CustomTable mt={20} />
      </Content>
    </PageLayout>
  );
}
