import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./BillsList.styles";
import SelectWithSearch from "../../../components/custom/SelectWithSearch/SelectWithSearch";
import OutlineCustomInput from "../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";

export default function BillsList() {
  return (
    <PageLayout>
      <Header pageTitle="Bills">
        <CustomButton width={200}>Create Bill</CustomButton>
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
